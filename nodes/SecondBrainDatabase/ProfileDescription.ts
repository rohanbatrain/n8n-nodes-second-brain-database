import { INodeProperties } from 'n8n-workflow';

export const profileOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['profile'],
            },
        },
        options: [
            {
                name: 'Get Profile',
                value: 'getProfile',
                description: 'Get current user profile',
                action: 'Get profile a profile',
            },
            {
                name: 'Update Profile',
                value: 'updateProfile',
                description: 'Update user profile',
                action: 'Update profile a profile',
            },
        ],
        default: 'getProfile',
    },
];

export const profileFields: INodeProperties[] = [
    {
        displayName: 'Update Fields',
        name: 'updateFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['profile'],
                operation: ['updateProfile'],
            },
        },
        options: [
            {
                displayName: 'First Name',
                name: 'first_name',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Last Name',
                name: 'last_name',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Bio',
                name: 'bio',
                type: 'string',
                default: '',
            },
        ],
    },
];
