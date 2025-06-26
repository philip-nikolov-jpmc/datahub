import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ErrorFallback } from '@src/ErrorFallback';

// Mock error for demonstration
const mockError = new Error('This is a sample error for demonstration purposes');
mockError.stack = `Error: This is a sample error for demonstration purposes
    at Component (src/components/SampleComponent.tsx:25:15)
    at renderWithHooks (react-dom/cjs/react-dom.development.js:14985:18)
    at mountIndeterminateComponent (react-dom/cjs/react-dom.development.js:17811:13)
    at beginWork (react-dom/cjs/react-dom.development.js:19049:16)
    at HTMLUnknownElement.callCallback (react-dom/cjs/react-dom.development.js:3945:14)`;

const meta: Meta<typeof ErrorFallback> = {
    title: 'Feedback / ErrorFallback',
    component: ErrorFallback,

    // Component-level parameters
    parameters: {
        layout: 'fullscreen',
        docs: {
            subtitle: 'Displays a user-friendly error page when React error boundaries catch exceptions.',
        },
    },

    // Component-level argTypes
    argTypes: {
        error: {
            description: 'The error object that was caught by the error boundary.',
            control: 'object',
            table: {
                type: { summary: 'Error' },
            },
        },
        resetErrorBoundary: {
            description: 'Function to reset the error boundary state.',
            control: false,
            table: {
                type: { summary: '() => void' },
            },
        },
    },

    // Default props
    args: {
        error: mockError,
        resetErrorBoundary: () => {
            console.log('Error boundary reset called');
            alert('Error boundary reset! In a real app, this would attempt to recover from the error.');
        },
    },
};

export default meta;

// Stories

type Story = StoryObj<typeof meta>;

// Basic story showing the error fallback
export const Default: Story = {
    name: 'Default Error State',
    args: {
        error: mockError,
        resetErrorBoundary: () => {
            console.log('Error boundary reset called');
            alert('Error boundary reset! In a real app, this would attempt to recover from the error.');
        },
    },
};

// Story showing error without stack trace
export const SimpleError: Story = {
    name: 'Simple Error Message',
    args: {
        error: new Error('Something went wrong'),
        resetErrorBoundary: () => {
            console.log('Error boundary reset called');
            alert('Error boundary reset! In a real app, this would attempt to recover from the error.');
        },
    },
    parameters: {
        docs: {
            description: {
                story: 'This shows the error fallback with a simple error message.',
            },
        },
    },
};

// Story showing minimal error
export const MinimalError: Story = {
    name: 'Minimal Error (No Stack Trace)',
    args: {
        error: new Error('Network connection failed'),
        resetErrorBoundary: () => {
            console.log('Error boundary reset called');
            alert('Error boundary reset! In a real app, this would attempt to recover from the error.');
        },
    },
};

// Interactive sandbox story
export const Sandbox: Story = {
    name: 'Interactive Sandbox',
    tags: ['dev'],
    render: (props) => <ErrorFallback {...props} />,
    args: {
        error: mockError,
        resetErrorBoundary: () => {
            console.log('Error boundary reset called');
            alert('Error boundary reset! In a real app, this would attempt to recover from the error.');
        },
    },
};