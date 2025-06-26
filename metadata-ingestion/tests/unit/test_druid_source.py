from datahub.ingestion.source.sql.druid import DruidConfig


def test_druid_uri():
    config = DruidConfig.parse_obj({"host_port": "localhost:8082"})

    assert config.get_sql_alchemy_url() == "druid://localhost:8082/druid/v2/sql/"


def test_druid_get_identifier():
    config = DruidConfig.parse_obj({"host_port": "localhost:8082"})

    assert config.get_identifier("schema", "table") == "table"


def test_druid_authentication_headers():
    """Test bearer token and custom headers functionality."""
    config = DruidConfig.parse_obj({
        "host_port": "localhost:8082",
        "bearer_token": "test-token-123",
        "headers": {
            "X-Custom-Header": "custom-value",
            "Authorization": "should-be-overridden"
        }
    })

    url = config.get_sql_alchemy_url()
    
    assert url == "druid://localhost:8082/druid/v2/sql/"
    assert "connect_args" in config.options
    assert "headers" in config.options["connect_args"]
    # Bearer token should override any existing Authorization header
    assert config.options["connect_args"]["headers"]["Authorization"] == "Bearer test-token-123"
    # Custom headers should still be present
    assert config.options["connect_args"]["headers"]["X-Custom-Header"] == "custom-value"


def test_druid_idempotency():
    """Test that calling get_sql_alchemy_url multiple times is idempotent."""
    config = DruidConfig.parse_obj({
        "host_port": "localhost:8082",
        "bearer_token": "test-token-123",
        "headers": {"X-Custom": "value"}
    })

    # Call multiple times
    url1 = config.get_sql_alchemy_url()
    url2 = config.get_sql_alchemy_url()
    url3 = config.get_sql_alchemy_url()
    
    # All calls should return the same URL
    assert url1 == url2 == url3 == "druid://localhost:8082/druid/v2/sql/"
    
    # Headers should be consistent
    expected_headers = {
        "Authorization": "Bearer test-token-123",
        "X-Custom": "value"
    }
    assert config.options["connect_args"]["headers"] == expected_headers
