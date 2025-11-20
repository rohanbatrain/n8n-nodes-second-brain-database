import { INodeProperties } from 'n8n-workflow';

export const blogOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['blog'],
            },
        },
        options: [
            {
                name: 'Create Website',
                value: 'createWebsite',
                description: 'Create a new blog website',
                action: 'Create website a blog',
            },
            {
                name: 'List Websites',
                value: 'listWebsites',
                description: 'List all blog websites',
                action: 'List websites a blog',
            },
            {
                name: 'Get Website',
                value: 'getWebsite',
                description: 'Get details of a blog website',
                action: 'Get website a blog',
            },
            {
                name: 'Update Website',
                value: 'updateWebsite',
                description: 'Update a blog website',
                action: 'Update website a blog',
            },
            {
                name: 'Create Post',
                value: 'createPost',
                description: 'Create a new blog post',
                action: 'Create post a blog',
            },
            {
                name: 'List Posts',
                value: 'listPosts',
                description: 'List posts for a website',
                action: 'List posts a blog',
            },
            {
                name: 'Get Post',
                value: 'getPost',
                description: 'Get a blog post',
                action: 'Get post a blog',
            },
            {
                name: 'Update Post',
                value: 'updatePost',
                description: 'Update a blog post',
                action: 'Update post a blog',
            },
            {
                name: 'Delete Post',
                value: 'deletePost',
                description: 'Delete a blog post',
                action: 'Delete post a blog',
            },
        ],
        default: 'listWebsites',
    },
];

export const blogFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                 blog:website                               */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Website ID',
        name: 'websiteId',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['blog'],
                operation: ['getWebsite', 'updateWebsite', 'createPost', 'listPosts', 'getPost', 'updatePost', 'deletePost'],
            },
        },
        description: 'The ID of the website',
        required: true,
    },
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['blog'],
                operation: ['createWebsite', 'updateWebsite'],
            },
        },
        description: 'Name of the website',
    },
    {
        displayName: 'Domain',
        name: 'domain',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['blog'],
                operation: ['createWebsite', 'updateWebsite'],
            },
        },
        description: 'Domain of the website',
    },

    /* -------------------------------------------------------------------------- */
    /*                                 blog:post                                  */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Post ID',
        name: 'postId',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['blog'],
                operation: ['updatePost', 'deletePost'],
            },
        },
        description: 'The ID of the post',
        required: true,
    },
    {
        displayName: 'Post Slug',
        name: 'postSlug',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['blog'],
                operation: ['getPost'],
            },
        },
        description: 'The slug of the post',
        required: true,
    },
    {
        displayName: 'Title',
        name: 'title',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['blog'],
                operation: ['createPost', 'updatePost'],
            },
        },
        description: 'Title of the post',
    },
    {
        displayName: 'Content',
        name: 'content',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['blog'],
                operation: ['createPost', 'updatePost'],
            },
        },
        description: 'Content of the post',
    },
];
