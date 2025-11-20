import { INodeProperties } from 'n8n-workflow';

export const clubsOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['clubs'],
            },
        },
        options: [
            // University Operations
            {
                name: 'Create University',
                value: 'createUniversity',
                description: 'Request creation of a new university',
                action: 'Create university',
            },
            {
                name: 'Get University',
                value: 'getUniversity',
                description: 'Get a specific university by ID',
                action: 'Get university',
            },
            {
                name: 'List Universities',
                value: 'listUniversities',
                description: 'Get all approved universities',
                action: 'List universities',
            },

            // Club Operations
            {
                name: 'Create Club',
                value: 'createClub',
                description: 'Create a new club within a university',
                action: 'Create club',
            },
            {
                name: 'Deactivate Club',
                value: 'deactivateClub',
                description: 'Deactivate a club',
                action: 'Deactivate club',
            },
            {
                name: 'Get Club',
                value: 'getClub',
                description: 'Get a specific club by ID',
                action: 'Get club',
            },
            {
                name: 'List Clubs',
                value: 'listClubs',
                description: 'Get clubs with optional filtering',
                action: 'List clubs',
            },
            {
                name: 'Search Clubs',
                value: 'searchClubs',
                description: 'Advanced club search with filters',
                action: 'Search clubs',
            },
            {
                name: 'Update Club',
                value: 'updateClub',
                description: 'Update club settings',
                action: 'Update club',
            },

            // Vertical Operations
            {
                name: 'Create Vertical',
                value: 'createVertical',
                description: 'Create a new vertical in a club',
                action: 'Create vertical',
            },
            {
                name: 'Get Vertical',
                value: 'getVertical',
                description: 'Get a specific vertical by ID',
                action: 'Get vertical',
            },
            {
                name: 'List Verticals',
                value: 'listVerticals',
                description: 'Get all verticals for a club',
                action: 'List verticals',
            },
            {
                name: 'Update Vertical',
                value: 'updateVertical',
                description: 'Update a vertical',
                action: 'Update vertical',
            },

            // Member Operations
            {
                name: 'Invite Member',
                value: 'inviteMember',
                description: 'Invite a user to join a club',
                action: 'Invite member',
            },
            {
                name: 'Update Member Role',
                value: 'updateMemberRole',
                description: 'Update member role',
                action: 'Update member role',
            },
        ],
        default: 'listClubs',
    },
];

export const clubsFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                 Universities                               */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['clubs'],
                operation: ['createUniversity'],
            },
        },
        default: '',
        description: 'Name of the university',
    },
    {
        displayName: 'Domain',
        name: 'domain',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['clubs'],
                operation: ['createUniversity'],
            },
        },
        default: '',
        description: 'Email domain of the university (e.g., university.edu)',
    },
    {
        displayName: 'University ID',
        name: 'universityId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['clubs'],
                operation: ['getUniversity', 'createClub', 'listClubs'],
            },
        },
        default: '',
        description: 'ID of the university',
    },
    {
        displayName: 'Search',
        name: 'search',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['clubs'],
                operation: ['listUniversities', 'listClubs'],
            },
        },
        default: '',
        description: 'Search term',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['clubs'],
                operation: ['createUniversity'],
            },
        },
        options: [
            {
                displayName: 'Description',
                name: 'description',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Location',
                name: 'location',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Website',
                name: 'website',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Logo URL',
                name: 'logoUrl',
                type: 'string',
                default: '',
            },
        ],
    },

    /* -------------------------------------------------------------------------- */
    /*                                    Clubs                                   */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Club ID',
        name: 'clubId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['clubs'],
                operation: [
                    'getClub',
                    'updateClub',
                    'deactivateClub',
                    'createVertical',
                    'listVerticals',
                    'inviteMember',
                ],
            },
        },
        default: '',
        description: 'ID of the club',
    },
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['clubs'],
                operation: ['createClub'],
            },
        },
        default: '',
        description: 'Name of the club',
    },
    {
        displayName: 'Category',
        name: 'category',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['clubs'],
                operation: ['createClub'],
            },
        },
        default: '',
        description: 'Category of the club',
    },
    {
        displayName: 'Category',
        name: 'category',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['clubs'],
                operation: ['listClubs', 'searchClubs'],
            },
        },
        default: '',
        description: 'Filter by category',
    },
    {
        displayName: 'Query',
        name: 'query',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['clubs'],
                operation: ['searchClubs'],
            },
        },
        default: '',
        description: 'Search query string',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['clubs'],
                operation: ['createClub', 'updateClub'],
            },
        },
        options: [
            {
                displayName: 'Description',
                name: 'description',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Logo URL',
                name: 'logoUrl',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Banner URL',
                name: 'bannerUrl',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Website URL',
                name: 'websiteUrl',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Max Members',
                name: 'maxMembers',
                type: 'number',
                default: 100,
            },
            {
                displayName: 'Tags',
                name: 'tags',
                type: 'string',
                default: '',
                description: 'Comma-separated tags',
            },
        ],
    },

    /* -------------------------------------------------------------------------- */
    /*                                  Verticals                                 */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Vertical ID',
        name: 'verticalId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['clubs'],
                operation: ['getVertical', 'updateVertical'],
            },
        },
        default: '',
        description: 'ID of the vertical',
    },
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['clubs'],
                operation: ['createVertical'],
            },
        },
        default: '',
        description: 'Name of the vertical',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['clubs'],
                operation: ['createVertical', 'updateVertical'],
            },
        },
        options: [
            {
                displayName: 'Description',
                name: 'description',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Lead ID',
                name: 'leadId',
                type: 'string',
                default: '',
                description: 'User ID of the vertical lead',
            },
            {
                displayName: 'Max Members',
                name: 'maxMembers',
                type: 'number',
                default: 20,
            },
            {
                displayName: 'Color',
                name: 'color',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Icon',
                name: 'icon',
                type: 'string',
                default: '',
            },
        ],
    },

    /* -------------------------------------------------------------------------- */
    /*                                   Members                                  */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Member ID',
        name: 'memberId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['clubs'],
                operation: ['updateMemberRole'],
            },
        },
        default: '',
        description: 'ID of the club member',
    },
    {
        displayName: 'User ID',
        name: 'userId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['clubs'],
                operation: ['inviteMember'],
            },
        },
        default: '',
        description: 'ID of the user to invite',
    },
    {
        displayName: 'Role',
        name: 'role',
        type: 'options',
        options: [
            { name: 'Member', value: 'member' },
            { name: 'Lead', value: 'lead' },
            { name: 'Admin', value: 'admin' },
            { name: 'Owner', value: 'owner' },
        ],
        required: true,
        displayOptions: {
            show: {
                resource: ['clubs'],
                operation: ['inviteMember', 'updateMemberRole'],
            },
        },
        default: 'member',
        description: 'Role in the club',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['clubs'],
                operation: ['inviteMember'],
            },
        },
        options: [
            {
                displayName: 'Vertical ID',
                name: 'verticalId',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Message',
                name: 'message',
                type: 'string',
                default: '',
            },
        ],
    },
];
