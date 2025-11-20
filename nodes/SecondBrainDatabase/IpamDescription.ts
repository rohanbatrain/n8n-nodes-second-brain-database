import { INodeProperties } from 'n8n-workflow';

export const ipamOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['ipam'],
            },
        },
        options: [
            {
                name: 'List Countries',
                value: 'listCountries',
                description: 'List all countries',
                action: 'List countries an ipam',
            },
            {
                name: 'Get Country',
                value: 'getCountry',
                description: 'Get details of a country',
                action: 'Get country an ipam',
            },
            {
                name: 'Get Country Utilization',
                value: 'getCountryUtilization',
                description: 'Get utilization stats for a country',
                action: 'Get country utilization an ipam',
            },
            {
                name: 'Create Region',
                value: 'createRegion',
                description: 'Create a new region',
                action: 'Create region an ipam',
            },
            {
                name: 'List Regions',
                value: 'listRegions',
                description: 'List regions',
                action: 'List regions an ipam',
            },
            {
                name: 'Get Region',
                value: 'getRegion',
                description: 'Get details of a region',
                action: 'Get region an ipam',
            },
            {
                name: 'Update Region',
                value: 'updateRegion',
                description: 'Update a region',
                action: 'Update region an ipam',
            },
            {
                name: 'Delete Region',
                value: 'deleteRegion',
                description: 'Delete a region',
                action: 'Delete region an ipam',
            },
            {
                name: 'Get Dashboard Stats',
                value: 'getDashboardStats',
                description: 'Get IPAM dashboard statistics',
                action: 'Get dashboard stats an ipam',
            },
            {
                name: 'Get Top Countries',
                value: 'getTopCountries',
                description: 'Get top countries by utilization',
                action: 'Get top countries an ipam',
            },
            {
                name: 'Get Recent Activity',
                value: 'getRecentActivity',
                description: 'Get recent IPAM activity',
                action: 'Get recent activity an ipam',
            },
        ],
        default: 'listCountries',
    },
];

export const ipamFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                 ipam:common                                */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Country',
        name: 'country',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['ipam'],
                operation: ['getCountry', 'getCountryUtilization', 'createRegion'],
            },
        },
        description: 'The country name',
        required: true,
    },
    {
        displayName: 'Region ID',
        name: 'regionId',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['ipam'],
                operation: ['getRegion', 'updateRegion', 'deleteRegion'],
            },
        },
        description: 'The ID of the region',
        required: true,
    },

    /* -------------------------------------------------------------------------- */
    /*                                 ipam:createRegion                          */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Region Name',
        name: 'regionName',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['ipam'],
                operation: ['createRegion'],
            },
        },
        description: 'Name of the region',
        required: true,
    },
    {
        displayName: 'Description',
        name: 'description',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['ipam'],
                operation: ['createRegion', 'updateRegion'],
            },
        },
        description: 'Description of the region',
    },
    {
        displayName: 'Tags',
        name: 'tags',
        type: 'json',
        default: '{}',
        displayOptions: {
            show: {
                resource: ['ipam'],
                operation: ['createRegion', 'updateRegion'],
            },
        },
        description: 'Tags for the region (JSON)',
    },

    /* -------------------------------------------------------------------------- */
    /*                                 ipam:listRegions                           */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Filter Country',
        name: 'filterCountry',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['ipam'],
                operation: ['listRegions'],
            },
        },
        description: 'Filter regions by country',
    },
    {
        displayName: 'Filter Status',
        name: 'filterStatus',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['ipam'],
                operation: ['listRegions'],
            },
        },
        description: 'Filter regions by status',
    },
];
