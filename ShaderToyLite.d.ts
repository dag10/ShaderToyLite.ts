declare module 'shadertoylite' {
    type BufferKey = 'A' | 'B' | 'C' | 'D';
    type TextureName = string & { readonly __textureName: unique symbol };
    type ChannelName = BufferKey | TextureName; // Buffer key or texture name

    interface ShaderConfig {
        source: string;
        iChannel0?: ChannelName;
        iChannel1?: ChannelName;
        iChannel2?: ChannelName;
        iChannel3?: ChannelName;
    }

    export default class ShaderToyLite {
        constructor(canvasId: string);

        /**
         * Adds a WebGL texture that can be referenced by name in shader configs.
         * @param texture The WebGL texture object.
         * @param name The name to reference this texture by.
         */
        addTexture(texture: any, name: string): void; // Using 'any' for WebGLTexture for simplicity

        /**
         * Sets the common shader source code prepended to all other shaders.
         * @param source The common shader source code.
         */
        setCommon(source: string): void;

        /**
         * Sets the configuration for Buffer A.
         * @param config The shader configuration.
         */
        setBufferA(config: ShaderConfig): void;

        /**
         * Sets the configuration for Buffer B.
         * @param config The shader configuration.
         */
        setBufferB(config: ShaderConfig): void;

        /**
         * Sets the configuration for Buffer C.
         * @param config The shader configuration.
         */
        setBufferC(config: ShaderConfig): void;

        /**
         * Sets the configuration for Buffer D.
         * @param config The shader configuration.
         */
        setBufferD(config: ShaderConfig): void;

        /**
         * Sets the configuration for the main Image shader.
         * @param config The shader configuration.
         */
        setImage(config: ShaderConfig): void;

        /**
         * Sets a callback function to be executed on each draw frame.
         * @param callback The function to call.
         */
        setOnDraw(callback: () => void): void;

        /**
         * Starts the rendering loop.
         */
        play(): void;

        /**
         * Pauses the rendering loop.
         */
        pause(): void;

        /**
         * Checks if the rendering loop is currently active.
         * @returns True if playing, false otherwise.
         */
        isPlaying(): boolean;

        /**
         * Resets the internal time counter to zero.
         */
        reset(): void;

        /**
         * Gets the current internal time counter.
         * @returns The current time in seconds.
         */
        time(): number;
    }
} 
