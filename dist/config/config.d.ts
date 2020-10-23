export declare const config: () => {
    port: number;
    Development: {
        type: string;
        host: string;
        port: string;
        username: string;
        password: string;
        database: string;
        synchronize: boolean;
        logging: boolean;
        entities: string[];
    };
};
