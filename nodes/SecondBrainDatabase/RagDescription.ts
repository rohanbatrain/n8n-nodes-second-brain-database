import { INodeProperties } from 'n8n-workflow';

export const ragOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['rag'],
            },
        },
        options: [
            {
                name: 'Upload Document',
                value: 'uploadDocument',
                description: 'Upload a document for RAG processing',
                action: 'Upload document a rag',
            },
            {
                name: 'Query',
                value: 'query',
                description: 'Query the RAG system',
                action: 'Query a rag',
            },
            {
                name: 'Batch Process',
                value: 'batchProcess',
                description: 'Batch process multiple documents',
                action: 'Batch process a rag',
            },
            {
                name: 'Get Task Status',
                value: 'getTaskStatus',
                description: 'Get the status of a processing task',
                action: 'Get task status a rag',
            },
            {
                name: 'Cancel Task',
                value: 'cancelTask',
                description: 'Cancel a processing task',
                action: 'Cancel task a rag',
            },
            {
                name: 'Search',
                value: 'search',
                description: 'Perform a vector search only',
                action: 'Search a rag',
            },
            {
                name: 'List Documents',
                value: 'listDocuments',
                description: 'List indexed documents',
                action: 'List documents a rag',
            },
            {
                name: 'Delete Document',
                value: 'deleteDocument',
                description: 'Delete an indexed document',
                action: 'Delete document a rag',
            },
        ],
        default: 'query',
    },
];

export const ragFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                 rag:uploadDocument                         */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'File Path',
        name: 'filePath',
        type: 'string',
        default: '',
        placeholder: '/path/to/file.pdf',
        displayOptions: {
            show: {
                resource: ['rag'],
                operation: ['uploadDocument'],
            },
        },
        description: 'Path to the file to upload (if running locally) or binary property',
    },
    {
        displayName: 'Binary Property',
        name: 'binaryPropertyName',
        type: 'string',
        default: 'data',
        displayOptions: {
            show: {
                resource: ['rag'],
                operation: ['uploadDocument'],
            },
        },
        description: 'Name of the binary property containing the file to upload',
    },

    /* -------------------------------------------------------------------------- */
    /*                                 rag:query                                  */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Query',
        name: 'queryText',
        type: 'string',
        default: '',
        placeholder: 'What is the summary of the document?',
        displayOptions: {
            show: {
                resource: ['rag'],
                operation: ['query', 'search'],
            },
        },
        description: 'The query text',
        required: true,
    },
    {
        displayName: 'Conversation ID',
        name: 'conversationId',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['rag'],
                operation: ['query'],
            },
        },
        description: 'Optional conversation ID for context',
    },

    /* -------------------------------------------------------------------------- */
    /*                                 rag:getTaskStatus/cancelTask               */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Task ID',
        name: 'taskId',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['rag'],
                operation: ['getTaskStatus', 'cancelTask'],
            },
        },
        description: 'The ID of the task',
        required: true,
    },

    /* -------------------------------------------------------------------------- */
    /*                                 rag:deleteDocument                         */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Document ID',
        name: 'documentId',
        type: 'string',
        default: '',
        displayOptions: {
            show: {
                resource: ['rag'],
                operation: ['deleteDocument'],
            },
        },
        description: 'The ID of the document to delete',
        required: true,
    },
];
