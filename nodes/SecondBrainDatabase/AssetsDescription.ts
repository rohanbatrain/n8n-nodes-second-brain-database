import { INodeProperties } from 'n8n-workflow';

export const assetsOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['assets'],
            },
        },
        options: [
            {
                name: 'List Avatars',
                value: 'listAvatars',
                description: 'List available avatars',
                action: 'List avatars an assets',
            },
            {
                name: 'Get Avatar',
                value: 'getAvatar',
                description: 'Get avatar details',
                action: 'Get avatar an assets',
            },
            {
                name: 'List Themes',
                value: 'listThemes',
                description: 'List available themes',
                action: 'List themes an assets',
            },
            {
                name: 'Get Theme',
                value: 'getTheme',
                description: 'Get theme details',
                action: 'Get theme an assets',
            },
            {
                name: 'List Banners',
                value: 'listBanners',
                description: 'List available banners',
                action: 'List banners an assets',
            },
            {
                name: 'Get Banner',
                value: 'getBanner',
                description: 'Get banner details',
                action: 'Get banner an assets',
            },
        ],
        default: 'listAvatars',
    },
];

export const assetsFields: INodeProperties[] = [];
