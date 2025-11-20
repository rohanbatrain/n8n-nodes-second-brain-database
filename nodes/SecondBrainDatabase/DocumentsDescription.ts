import { INodeProperties } from 'n8n-workflow';

export const documentsOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['documents'],
            },
        },
        options: [
            {
                name: 'Chunk Document',
                value: 'chunkDocument',
                description: 'Chunk document for RAG/vector search',
                action: 'Chunk document',
            },
            {
                name: 'Delete Document',
                value: 'deleteDocument',
                description: 'Delete processed document',
                action: 'Delete document',
            },
            {
                name: 'Extract Tables',
                value: 'extractTables',
                description: 'Extract tables from document',
                action: 'Extract tables',
            },
            {
                name: 'Get Document',
                value: 'getDocument',
                description: 'Get processed document by ID',
                action: 'Get document',
            },
            {
                name: 'Get Processing Status',
                value: 'getProcessingStatus',
                description: 'Get document processing status',
                action: 'Get processing status',
            },
            {
                name: 'List Documents',
                value: 'listDocuments',
                description: 'List user processed documents',
                action: 'List documents',
            },
            {
                name: 'Upload Document',
                value: 'uploadDocument',
                description: 'Upload and process document',
                action: 'Upload document',
            },
        ],
        default: 'listDocuments',
    },
];

export const documentsFields: INodeProperties[] = [
    /* -------------------------------------------------------------------------- */
    /*                                  Documents                                 */
    /* -------------------------------------------------------------------------- */
    {
        displayName: 'Document ID',
        name: 'documentId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['documents'],
                operation: ['getDocument', 'chunkDocument', 'deleteDocument'],
            },
        },
        default: '',
        description: 'ID of the document',
    },
    {
        displayName: 'Task ID',
        name: 'taskId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['documents'],
                operation: ['getProcessingStatus'],
            },
        },
        default: '',
        description: 'Task ID from upload response',
    },
    {
        displayName: 'File Name',
        name: 'fileName',
        type: 'string',
        displayOptions: {
            show: {
                resource: ['documents'],
                operation: ['uploadDocument', 'extractTables'],
            },
        },
        default: '',
        placeholder: 'document.pdf',
        description: 'Name of the file to upload',
    },
    {
        displayName: 'Binary Property',
        name: 'binaryPropertyName',
        type: 'string',
        default: 'data',
        required: true,
        displayOptions: {
            show: {
                resource: ['documents'],
                operation: ['uploadDocument', 'extractTables'],
            },
        },
        description: 'Name of the binary property which contains the data for the file to be uploaded',
    },
    {
        displayName: 'Extract Images',
        name: 'extractImages',
        type: 'boolean',
        displayOptions: {
            show: {
                resource: ['documents'],
                operation: ['uploadDocument'],
            },
        },
        default: true,
        description: 'Whether to extract images from the document',
    },
    {
        displayName: 'Output Format',
        name: 'outputFormat',
        type: 'options',
        options: [
            { name: 'Markdown', value: 'markdown' },
            { name: 'JSON', value: 'json' },
            { name: 'Text', value: 'text' },
        ],
        displayOptions: {
            show: {
                resource: ['documents'],
                operation: ['uploadDocument'],
            },
        },
        default: 'markdown',
        description: 'Format of the output',
    },
    {
        displayName: 'Async Processing',
        name: 'asyncProcessing',
        type: 'boolean',
        displayOptions: {
            show: {
                resource: ['documents'],
                operation: ['uploadDocument'],
            },
        },
        default: true,
        description: 'Whether to process in background (recommended for large files)',
    },
    {
        displayName: 'Chunk Size',
        name: 'chunkSize',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['documents'],
                operation: ['chunkDocument'],
            },
        },
        default: 1000,
        description: 'Characters per chunk',
    },
    {
        displayName: 'Chunk Overlap',
        name: 'chunkOverlap',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['documents'],
                operation: ['chunkDocument'],
            },
        },
        default: 200,
        description: 'Overlap between chunks',
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['documents'],
                operation: ['listDocuments'],
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
                resource: ['documents'],
                operation: ['listDocuments'],
            },
        },
        default: 0,
        description: 'Number of results to skip',
    },
];
