from datahub.ingestion.source.sql.druid import DruidConfig


def test_druid_uri():
    config = DruidConfig.parse_obj({"host_port": "localhost:8082"})

    assert config.get_sql_alchemy_url() == "druid://localhost:8082/druid/v2/sql/"


def test_druid_get_identifier():
    config = DruidConfig.parse_obj({"host_port": "localhost:8082"})

    assert config.get_identifier("schema", "table") == "table"


def test_druid_bearer_token():
    """Test that bearer token is properly set in connect_args headers."""
    config = DruidConfig.parse_obj({
        "host_port": "localhost:8082",
        "bearer_token": "test-token-123"
    })

    url = config.get_sql_alchemy_url()
    
    assert url == "druid://localhost:8082/druid/v2/sql/"
    assert "connect_args" in config.options
    assert "headers" in config.options["connect_args"]
    assert config.options["connect_args"]["headers"]["Authorization"] == "Bearer test-token-123"


def test_druid_custom_headers():
    """Test that custom headers are properly set in connect_args."""
    config = DruidConfig.parse_obj({
        "host_port": "localhost:8082",
        "headers": {
            "X-Custom-Header": "custom-value",
            "X-Another-Header": "another-value"
        }
    })

    url = config.get_sql_alchemy_url()
    
    assert url == "druid://localhost:8082/druid/v2/sql/"
    assert "connect_args" in config.options
    assert "headers" in config.options["connect_args"]
    assert config.options["connect_args"]["headers"]["X-Custom-Header"] == "custom-value"
    assert config.options["connect_args"]["headers"]["X-Another-Header"] == "another-value"


def test_druid_bearer_token_and_custom_headers():
    """Test that bearer token and custom headers work together, with bearer token taking precedence for Authorization."""
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


def test_druid_no_auth_no_headers():
    """Test that no headers are set when no bearer token or custom headers are provided."""
    config = DruidConfig.parse_obj({"host_port": "localhost:8082"})

    url = config.get_sql_alchemy_url()
    
    assert url == "druid://localhost:8082/druid/v2/sql/"
    # Should not have connect_args when no auth/headers are provided
    assert "connect_args" not in config.options


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


def test_druid_existing_connect_args():
    """Test that bearer token/headers work with existing connect_args."""
    config = DruidConfig.parse_obj({
        "host_port": "localhost:8082",
        "bearer_token": "test-token-123",
        "options": {
            "connect_args": {
                "timeout": 30,
                "pool_size": 10
            }
        }
    })

    url = config.get_sql_alchemy_url()
    
    assert url == "druid://localhost:8082/druid/v2/sql/"
    # Should preserve existing connect_args
    assert config.options["connect_args"]["timeout"] == 30
    assert config.options["connect_args"]["pool_size"] == 10
    # Should add headers
    assert config.options["connect_args"]["headers"]["Authorization"] == "Bearer test-token-123"
