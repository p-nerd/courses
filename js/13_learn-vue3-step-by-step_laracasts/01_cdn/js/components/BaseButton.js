export default {
    template: `
        <button 
            class="bg-gray-200 px-5 py-3 hover:bg-gray-400 rounded-md disabled:cursor-not-allowed" 
            :disabled="processing"
        >
            <slot />
        </button>
    `,
    data() {
        return {
            processing: true,
        };
    },
};
