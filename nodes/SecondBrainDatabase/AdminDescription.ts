import { INodeProperties } from 'n8n-workflow';

export const adminOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['admin'],
            },
        },
        options: [
            {
                name: 'Add Whitelist',
                value: 'addWhitelist',
                description: 'Add an email/IP pair to the whitelist',
                action: 'Add whitelist an admin',
            },
            {
                name: 'Remove Whitelist',
                value: 'removeWhitelist',
                description: 'Remove an email/IP pair from the whitelist',
                action: 'Remove whitelist an admin',
            },
            {
                name: 'List Whitelist',
                value: 'listWhitelist',
                description: 'List all whitelisted pairs',
                action: 'List whitelist an admin',
            },
            {
                name: 'Add Blocklist',
                value: 'addBlocklist',
                description: 'Add an email/IP pair to the blocklist',
                action: 'Add blocklist an admin',
            },
            {
                name: 'Remove Blocklist',
                value: 'removeBlocklist',
                description: 'Remove an email/IP pair from the blocklist',
                action: 'Remove blocklist an admin',
            },
            {
                name: 'List Blocklist',
                value: 'listBlocklist',
                description: 'List all blocklisted pairs',
                action: 'List blocklist an admin',
            },
            {
                name: 'List Abuse Events',
                value: 'listAbuseEvents',
                description: 'List abuse events',
                action: 'List abuse events an admin',
            },
            {
                name: 'Resolve Abuse Event',
                value: 'resolveAbuseEvent',
                description: 'Resolve an abuse event',
                action: 'Resolve abuse event an admin',
            },
        ],
        default: 'listAbuseEvents',
    },
];

export const adminFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                 admin:whitelist/blocklist                  */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Email',
        name: 'email',
        type: 'string',
        default: '',
        placeholder: 'user@example.com',
        displayOptions: {
            show: {
                resource: ['admin'],
                operation: ['addWhitelist', 'removeWhitelist', 'addBlocklist', 'removeBlocklist'],
            },
        },
        description: 'The email address',
        required: true,
    },
    {
        displayName: 'IP Address',
        name: 'ip',
        type: 'string',
        default: '',
        placeholder: '192.168.1.1',
        displayOptions: {
            show: {
                resource: ['admin'],
                operation: ['addWhitelist', 'removeWhitelist', 'addBlocklist', 'removeBlocklist'],
            },
        },
        description: 'The IP address',
        required: true,
    },

    /* -------------------------------------------------------------------------- */
    /*                                 admin:listAbuseEvents                      */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Filter Email',
        name: 'filterEmail',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['admin'],
                operation: ['listAbuseEvents'],
            },
        },
        description: 'Filter events by email',
    },
    {
        displayName: 'Filter Type',
        name: 'filterType',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['admin'],
                operation: ['listAbuseEvents'],
            },
        },
        description: 'Filter events by type',
    },
    {
        displayName: 'Resolved',
        name: 'resolved',
        type: 'boolean',
        default: false,
        displayOptions: {
            show: {
                resource: ['admin'],
                operation: ['listAbuseEvents'],
            },
        },
        description: 'Filter by resolution status',
    },

    /* -------------------------------------------------------------------------- */
    /*                                 admin:resolveAbuseEvent                    */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Event ID',
        name: 'eventId',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['admin'],
                operation: ['resolveAbuseEvent'],
            },
        },
        description: 'The ID of the abuse event',
        required: true,
    },
    {
        displayName: 'Notes',
        name: 'notes',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['admin'],
                operation: ['resolveAbuseEvent'],
            },
        },
        description: 'Resolution notes',
    },
];
