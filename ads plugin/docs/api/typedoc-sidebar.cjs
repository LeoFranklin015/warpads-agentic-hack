// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const typedocSidebar = {
    items: [
        {
            type: "category",
            label: "Enumerations",
            items: [
                {
                    type: "doc",
                    id: "enumerations/GoalStatus",
                    label: "GoalStatus",
                },
                {
                    type: "doc",
                    id: "enumerations/ModelClass",
                    label: "ModelClass",
                },
                {
                    type: "doc",
                    id: "enumerations/ModelProviderName",
                    label: "ModelProviderName",
                },
                { type: "doc", id: "enumerations/Clients", label: "Clients" },
                {
                    type: "doc",
                    id: "enumerations/CacheStore",
                    label: "CacheStore",
                },
                {
                    type: "doc",
                    id: "enumerations/ServiceType",
                    label: "ServiceType",
                },
                {
                    type: "doc",
                    id: "enumerations/LoggingLevel",
                    label: "LoggingLevel",
                },
                {
                    type: "doc",
                    id: "enumerations/TokenizerType",
                    label: "TokenizerType",
                },
                {
                    type: "doc",
                    id: "enumerations/TranscriptionProvider",
                    label: "TranscriptionProvider",
                },
            ],
        },
        {
            type: "category",
            label: "Classes",
            items: [
                {
                    type: "doc",
                    id: "classes/MemoryCacheAdapter",
                    label: "MemoryCacheAdapter",
                },
                {
                    type: "doc",
                    id: "classes/FsCacheAdapter",
                    label: "FsCacheAdapter",
                },
                {
                    type: "doc",
                    id: "classes/DbCacheAdapter",
                    label: "DbCacheAdapter",
                },
                {
                    type: "doc",
                    id: "classes/CacheManager",
                    label: "CacheManager",
                },
                {
                    type: "doc",
                    id: "classes/DatabaseAdapter",
                    label: "DatabaseAdapter",
                },
                {
                    type: "doc",
                    id: "classes/MemoryManager",
                    label: "MemoryManager",
                },
                {
                    type: "doc",
                    id: "classes/AgentRuntime",
                    label: "AgentRuntime",
                },
                { type: "doc", id: "classes/Service", label: "Service" },
            ],
        },
        {
            type: "category",
            label: "Interfaces",
            items: [
                {
                    type: "doc",
                    id: "interfaces/ICacheAdapter",
                    label: "ICacheAdapter",
                },
                {
                    type: "doc",
                    id: "interfaces/GenerationOptions",
                    label: "GenerationOptions",
                },
                { type: "doc", id: "interfaces/Content", label: "Content" },
                {
                    type: "doc",
                    id: "interfaces/ActionExample",
                    label: "ActionExample",
                },
                {
                    type: "doc",
                    id: "interfaces/ConversationExample",
                    label: "ConversationExample",
                },
                { type: "doc", id: "interfaces/Actor", label: "Actor" },
                { type: "doc", id: "interfaces/Objective", label: "Objective" },
                { type: "doc", id: "interfaces/Goal", label: "Goal" },
                { type: "doc", id: "interfaces/State", label: "State" },
                { type: "doc", id: "interfaces/Memory", label: "Memory" },
                {
                    type: "doc",
                    id: "interfaces/MessageExample",
                    label: "MessageExample",
                },
                { type: "doc", id: "interfaces/Action", label: "Action" },
                {
                    type: "doc",
                    id: "interfaces/EvaluationExample",
                    label: "EvaluationExample",
                },
                { type: "doc", id: "interfaces/Evaluator", label: "Evaluator" },
                { type: "doc", id: "interfaces/Provider", label: "Provider" },
                {
                    type: "doc",
                    id: "interfaces/Relationship",
                    label: "Relationship",
                },
                { type: "doc", id: "interfaces/Account", label: "Account" },
                {
                    type: "doc",
                    id: "interfaces/Participant",
                    label: "Participant",
                },
                { type: "doc", id: "interfaces/Room", label: "Room" },
                {
                    type: "doc",
                    id: "interfaces/IAgentConfig",
                    label: "IAgentConfig",
                },
                {
                    type: "doc",
                    id: "interfaces/ModelConfiguration",
                    label: "ModelConfiguration",
                },
                {
                    type: "doc",
                    id: "interfaces/IDatabaseAdapter",
                    label: "IDatabaseAdapter",
                },
                {
                    type: "doc",
                    id: "interfaces/IDatabaseCacheAdapter",
                    label: "IDatabaseCacheAdapter",
                },
                {
                    type: "doc",
                    id: "interfaces/IMemoryManager",
                    label: "IMemoryManager",
                },
                {
                    type: "doc",
                    id: "interfaces/ICacheManager",
                    label: "ICacheManager",
                },
                {
                    type: "doc",
                    id: "interfaces/IAgentRuntime",
                    label: "IAgentRuntime",
                },
                {
                    type: "doc",
                    id: "interfaces/IImageDescriptionService",
                    label: "IImageDescriptionService",
                },
                {
                    type: "doc",
                    id: "interfaces/ITranscriptionService",
                    label: "ITranscriptionService",
                },
                {
                    type: "doc",
                    id: "interfaces/IVideoService",
                    label: "IVideoService",
                },
                {
                    type: "doc",
                    id: "interfaces/ITextGenerationService",
                    label: "ITextGenerationService",
                },
                {
                    type: "doc",
                    id: "interfaces/IBrowserService",
                    label: "IBrowserService",
                },
                {
                    type: "doc",
                    id: "interfaces/ISpeechService",
                    label: "ISpeechService",
                },
                {
                    type: "doc",
                    id: "interfaces/IPdfService",
                    label: "IPdfService",
                },
                {
                    type: "doc",
                    id: "interfaces/IAwsS3Service",
                    label: "IAwsS3Service",
                },
                {
                    type: "doc",
                    id: "interfaces/ActionResponse",
                    label: "ActionResponse",
                },
                {
                    type: "doc",
                    id: "interfaces/ISlackService",
                    label: "ISlackService",
                },
            ],
        },
        {
            type: "category",
            label: "Type Aliases",
            items: [
                {
                    type: "doc",
                    id: "type-aliases/EmbeddingProviderType",
                    label: "EmbeddingProviderType",
                },
                {
                    type: "doc",
                    id: "type-aliases/EmbeddingConfig",
                    label: "EmbeddingConfig",
                },
                {
                    type: "doc",
                    id: "type-aliases/EnvConfig",
                    label: "EnvConfig",
                },
                {
                    type: "doc",
                    id: "type-aliases/CharacterConfig",
                    label: "CharacterConfig",
                },
                { type: "doc", id: "type-aliases/UUID", label: "UUID" },
                { type: "doc", id: "type-aliases/Model", label: "Model" },
                { type: "doc", id: "type-aliases/Models", label: "Models" },
                { type: "doc", id: "type-aliases/Handler", label: "Handler" },
                {
                    type: "doc",
                    id: "type-aliases/HandlerCallback",
                    label: "HandlerCallback",
                },
                {
                    type: "doc",
                    id: "type-aliases/Validator",
                    label: "Validator",
                },
                { type: "doc", id: "type-aliases/Media", label: "Media" },
                { type: "doc", id: "type-aliases/Client", label: "Client" },
                { type: "doc", id: "type-aliases/Plugin", label: "Plugin" },
                {
                    type: "doc",
                    id: "type-aliases/TelemetrySettings",
                    label: "TelemetrySettings",
                },
                {
                    type: "doc",
                    id: "type-aliases/Character",
                    label: "Character",
                },
                {
                    type: "doc",
                    id: "type-aliases/CacheOptions",
                    label: "CacheOptions",
                },
                {
                    type: "doc",
                    id: "type-aliases/SearchImage",
                    label: "SearchImage",
                },
                {
                    type: "doc",
                    id: "type-aliases/SearchResult",
                    label: "SearchResult",
                },
                {
                    type: "doc",
                    id: "type-aliases/SearchResponse",
                    label: "SearchResponse",
                },
                {
                    type: "doc",
                    id: "type-aliases/KnowledgeItem",
                    label: "KnowledgeItem",
                },
            ],
        },
        {
            type: "category",
            label: "Variables",
            items: [
                {
                    type: "doc",
                    id: "variables/defaultCharacter",
                    label: "defaultCharacter",
                },
                {
                    type: "doc",
                    id: "variables/EmbeddingProvider",
                    label: "EmbeddingProvider",
                },
                { type: "doc", id: "variables/envSchema", label: "envSchema" },
                {
                    type: "doc",
                    id: "variables/CharacterSchema",
                    label: "CharacterSchema",
                },
                {
                    type: "doc",
                    id: "variables/evaluationTemplate",
                    label: "evaluationTemplate",
                },
                { type: "doc", id: "variables/knowledge", label: "knowledge" },
                {
                    type: "doc",
                    id: "variables/elizaLogger",
                    label: "elizaLogger",
                },
                { type: "doc", id: "variables/models", label: "models" },
                {
                    type: "doc",
                    id: "variables/messageCompletionFooter",
                    label: "messageCompletionFooter",
                },
                {
                    type: "doc",
                    id: "variables/shouldRespondFooter",
                    label: "shouldRespondFooter",
                },
                {
                    type: "doc",
                    id: "variables/booleanFooter",
                    label: "booleanFooter",
                },
                {
                    type: "doc",
                    id: "variables/stringArrayFooter",
                    label: "stringArrayFooter",
                },
                {
                    type: "doc",
                    id: "variables/postActionResponseFooter",
                    label: "postActionResponseFooter",
                },
                { type: "doc", id: "variables/settings", label: "settings" },
            ],
        },
        {
            type: "category",
            label: "Functions",
            items: [
                {
                    type: "doc",
                    id: "functions/composeActionExamples",
                    label: "composeActionExamples",
                },
                {
                    type: "doc",
                    id: "functions/formatActionNames",
                    label: "formatActionNames",
                },
                {
                    type: "doc",
                    id: "functions/formatActions",
                    label: "formatActions",
                },
                {
                    type: "doc",
                    id: "functions/composeContext",
                    label: "composeContext",
                },
                { type: "doc", id: "functions/addHeader", label: "addHeader" },
                {
                    type: "doc",
                    id: "functions/composeRandomUser",
                    label: "composeRandomUser",
                },
                {
                    type: "doc",
                    id: "functions/getEmbeddingConfig",
                    label: "getEmbeddingConfig",
                },
                {
                    type: "doc",
                    id: "functions/getEmbeddingType",
                    label: "getEmbeddingType",
                },
                {
                    type: "doc",
                    id: "functions/getEmbeddingZeroVector",
                    label: "getEmbeddingZeroVector",
                },
                { type: "doc", id: "functions/embed", label: "embed" },
                {
                    type: "doc",
                    id: "functions/validateEnv",
                    label: "validateEnv",
                },
                {
                    type: "doc",
                    id: "functions/validateCharacterConfig",
                    label: "validateCharacterConfig",
                },
                {
                    type: "doc",
                    id: "functions/formatEvaluatorNames",
                    label: "formatEvaluatorNames",
                },
                {
                    type: "doc",
                    id: "functions/formatEvaluators",
                    label: "formatEvaluators",
                },
                {
                    type: "doc",
                    id: "functions/formatEvaluatorExamples",
                    label: "formatEvaluatorExamples",
                },
                {
                    type: "doc",
                    id: "functions/formatEvaluatorExampleDescriptions",
                    label: "formatEvaluatorExampleDescriptions",
                },
                {
                    type: "doc",
                    id: "functions/trimTokens",
                    label: "trimTokens",
                },
                {
                    type: "doc",
                    id: "functions/generateText",
                    label: "generateText",
                },
                {
                    type: "doc",
                    id: "functions/generateShouldRespond",
                    label: "generateShouldRespond",
                },
                {
                    type: "doc",
                    id: "functions/splitChunks",
                    label: "splitChunks",
                },
                {
                    type: "doc",
                    id: "functions/generateTrueOrFalse",
                    label: "generateTrueOrFalse",
                },
                {
                    type: "doc",
                    id: "functions/generateTextArray",
                    label: "generateTextArray",
                },
                {
                    type: "doc",
                    id: "functions/generateObjectDeprecated",
                    label: "generateObjectDeprecated",
                },
                {
                    type: "doc",
                    id: "functions/generateObjectArray",
                    label: "generateObjectArray",
                },
                {
                    type: "doc",
                    id: "functions/generateMessageResponse",
                    label: "generateMessageResponse",
                },
                {
                    type: "doc",
                    id: "functions/generateImage",
                    label: "generateImage",
                },
                {
                    type: "doc",
                    id: "functions/generateCaption",
                    label: "generateCaption",
                },
                {
                    type: "doc",
                    id: "functions/generateWebSearch",
                    label: "generateWebSearch",
                },
                {
                    type: "doc",
                    id: "functions/generateObject",
                    label: "generateObject",
                },
                {
                    type: "doc",
                    id: "functions/handleProvider",
                    label: "handleProvider",
                },
                {
                    type: "doc",
                    id: "functions/generateTweetActions",
                    label: "generateTweetActions",
                },
                { type: "doc", id: "functions/getGoals", label: "getGoals" },
                {
                    type: "doc",
                    id: "functions/formatGoalsAsString",
                    label: "formatGoalsAsString",
                },
                {
                    type: "doc",
                    id: "functions/updateGoal",
                    label: "updateGoal",
                },
                {
                    type: "doc",
                    id: "functions/createGoal",
                    label: "createGoal",
                },
                {
                    type: "doc",
                    id: "functions/getActorDetails",
                    label: "getActorDetails",
                },
                {
                    type: "doc",
                    id: "functions/formatActors",
                    label: "formatActors",
                },
                {
                    type: "doc",
                    id: "functions/formatMessages",
                    label: "formatMessages",
                },
                {
                    type: "doc",
                    id: "functions/formatTimestamp",
                    label: "formatTimestamp",
                },
                { type: "doc", id: "functions/getModel", label: "getModel" },
                {
                    type: "doc",
                    id: "functions/getEndpoint",
                    label: "getEndpoint",
                },
                {
                    type: "doc",
                    id: "functions/parseShouldRespondFromText",
                    label: "parseShouldRespondFromText",
                },
                {
                    type: "doc",
                    id: "functions/parseBooleanFromText",
                    label: "parseBooleanFromText",
                },
                {
                    type: "doc",
                    id: "functions/parseJsonArrayFromText",
                    label: "parseJsonArrayFromText",
                },
                {
                    type: "doc",
                    id: "functions/parseJSONObjectFromText",
                    label: "parseJSONObjectFromText",
                },
                {
                    type: "doc",
                    id: "functions/parseActionResponseFromText",
                    label: "parseActionResponseFromText",
                },
                {
                    type: "doc",
                    id: "functions/formatPosts",
                    label: "formatPosts",
                },
                {
                    type: "doc",
                    id: "functions/getProviders",
                    label: "getProviders",
                },
                {
                    type: "doc",
                    id: "functions/createRelationship",
                    label: "createRelationship",
                },
                {
                    type: "doc",
                    id: "functions/getRelationship",
                    label: "getRelationship",
                },
                {
                    type: "doc",
                    id: "functions/getRelationships",
                    label: "getRelationships",
                },
                {
                    type: "doc",
                    id: "functions/formatRelationships",
                    label: "formatRelationships",
                },
                {
                    type: "doc",
                    id: "functions/findNearestEnvFile",
                    label: "findNearestEnvFile",
                },
                {
                    type: "doc",
                    id: "functions/configureSettings",
                    label: "configureSettings",
                },
                {
                    type: "doc",
                    id: "functions/loadEnvConfig",
                    label: "loadEnvConfig",
                },
                {
                    type: "doc",
                    id: "functions/getEnvVariable",
                    label: "getEnvVariable",
                },
                {
                    type: "doc",
                    id: "functions/hasEnvVariable",
                    label: "hasEnvVariable",
                },
                {
                    type: "doc",
                    id: "functions/stringToUuid",
                    label: "stringToUuid",
                },
            ],
        },
    ],
};
module.exports = typedocSidebar.items;
