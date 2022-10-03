import LoggerService from './shared/bizMOB/LoggerService';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $core: Record<any, any>;
        //$plugin: Record<any, any>;
    }
}

export {}  // Important! See note.