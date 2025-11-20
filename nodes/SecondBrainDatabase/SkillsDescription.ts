import { INodeProperties } from 'n8n-workflow';

export const skillsOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['skills'],
            },
        },
        options: [
            // Skill Operations
            {
                name: 'Create Skill',
                value: 'createSkill',
                description: 'Create a new skill',
                action: 'Create skill',
            },
            {
                name: 'Delete Skill',
                value: 'deleteSkill',
                description: 'Soft delete a skill',
                action: 'Delete skill',
            },
            {
                name: 'Get Skill',
                value: 'getSkill',
                description: 'Get detailed information about a specific skill',
                action: 'Get skill',
            },
            {
                name: 'Get Skill Tree',
                value: 'getSkillTree',
                description: 'Get hierarchical tree view of all user skills',
                action: 'Get skill tree',
            },
            {
                name: 'Link Parent Skill',
                value: 'linkParentSkill',
                description: 'Link a skill to a parent skill',
                action: 'Link parent skill',
            },
            {
                name: 'List Skills',
                value: 'listSkills',
                description: 'Get paginated list of user skills',
                action: 'List skills',
            },
            {
                name: 'Unlink Parent Skill',
                value: 'unlinkParentSkill',
                description: 'Unlink a skill from a parent skill',
                action: 'Unlink parent skill',
            },
            {
                name: 'Update Skill',
                value: 'updateSkill',
                description: 'Update an existing skill',
                action: 'Update skill',
            },

            // Log Operations
            {
                name: 'Add Skill Log',
                value: 'addSkillLog',
                description: 'Add a new log entry to track skill progress',
                action: 'Add skill log',
            },
            {
                name: 'Get Skill Logs',
                value: 'getSkillLogs',
                description: 'Get paginated log entries for a specific skill',
                action: 'Get skill logs',
            },
        ],
        default: 'listSkills',
    },
];

export const skillsFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                   Skills                                   */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Skill ID',
        name: 'skillId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['skills'],
                operation: [
                    'getSkill',
                    'updateSkill',
                    'deleteSkill',
                    'linkParentSkill',
                    'unlinkParentSkill',
                    'addSkillLog',
                    'getSkillLogs',
                ],
            },
        },
        default: '',
        description: 'ID of the skill',
    },
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['skills'],
                operation: ['createSkill'],
            },
        },
        default: '',
        description: 'Name of the skill',
    },
    {
        displayName: 'Parent Skill ID',
        name: 'parentId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['skills'],
                operation: ['linkParentSkill', 'unlinkParentSkill'],
            },
        },
        default: '',
        description: 'ID of the parent skill',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['skills'],
                operation: ['createSkill', 'updateSkill'],
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
                displayName: 'Parent Skill IDs',
                name: 'parentSkillIds',
                type: 'string',
                default: '',
                description: 'Comma-separated list of parent skill IDs',
            },
            {
                displayName: 'Tags',
                name: 'tags',
                type: 'string',
                default: '',
                description: 'Comma-separated tags',
            },
            {
                displayName: 'Metadata',
                name: 'metadata',
                type: 'json',
                default: '{}',
                description: 'JSON metadata',
            },
        ],
    },
    {
        displayName: 'Include Analytics',
        name: 'includeAnalytics',
        type: 'boolean',
        displayOptions: {
            show: {
                resource: ['skills'],
                operation: ['listSkills', 'getSkill'],
            },
        },
        default: false,
        description: 'Whether to include analytics data',
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['skills'],
                operation: ['listSkills', 'getSkillLogs'],
            },
        },
        default: 50,
        description: 'Max number of results to return',
    },
    {
        displayName: 'Skip',
        name: 'skip',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['skills'],
                operation: ['listSkills', 'getSkillLogs'],
            },
        },
        default: 0,
        description: 'Number of results to skip',
    },

    /* -------------------------------------------------------------------------- */
    /*                                    Logs                                    */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Project ID',
        name: 'projectId',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['skills'],
                operation: ['addSkillLog'],
            },
        },
        default: '',
        description: 'Optional project ID associated with this log',
    },
    {
        displayName: 'Progress State',
        name: 'progressState',
        type: 'options',
        options: [
            { name: 'Not Started', value: 'not_started' },
            { name: 'In Progress', value: 'in_progress' },
            { name: 'Completed', value: 'completed' },
            { name: 'Blocked', value: 'blocked' },
        ],
        displayOptions: {
            show: {
                resource: ['skills'],
                operation: ['addSkillLog'],
            },
        },
        default: 'in_progress',
        description: 'Current progress state',
    },
    {
        displayName: 'Numeric Level',
        name: 'numericLevel',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['skills'],
                operation: ['addSkillLog'],
            },
        },
        default: 0,
        description: 'Numeric progress level (e.g. 0-100)',
    },
    {
        displayName: 'Notes',
        name: 'notes',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['skills'],
                operation: ['addSkillLog'],
            },
        },
        default: '',
        description: 'Log notes',
    },
    {
        displayName: 'Context',
        name: 'context',
        type: 'json',
        displayOptions: {
            show: {
                resource: ['skills'],
                operation: ['addSkillLog'],
            },
        },
        default: '{}',
        description: 'Additional context in JSON format',
    },
];
