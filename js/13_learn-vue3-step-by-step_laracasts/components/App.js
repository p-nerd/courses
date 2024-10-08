export default {
    template: `
        <div>
            <input type="text" v-model="greeting" />
        </div>
        <div>
            <p>{{ greeting }} ({{ greeting.length }})</p>
        </div>
        <div>
            <button :class="active ? 'text-red' : 'text-green'" v-on:click="toggle">
                Click Me
            </button>
        </div>
        <div>
            <section v-show="inProgressAssignments.length">
                <h2>In Progress</h2>
                <ul v-for="assignment in inProgressAssignments" :key="assignment.id">
                    <li>
                        <label>
                            <input type="checkbox" v-model="assignment.complete" />
                            {{ assignment.name }}
                        </label>
                    </li>
                </ul>
            </section>
            <section v-show="completedAssignments.length">
                <h2>In Completed</h2>
                <ul v-for="assignment in completedAssignments" :key="assignment.id">
                    <li>
                        <label>
                            <input type="checkbox" v-model="assignment.complete" />
                            {{ assignment.name }}
                        </label>
                    </li>
                </ul>
            </section>
        </div>
    `,
    data() {
        return {
            greeting: "Hello World 2",
            active: false,
            assignments: [
                { name: "Finished Assign", complete: false, id: 1 },
                { name: "Read Chapter 4", complete: false, id: 2 },
                { name: "Trun in Homework", complete: false, id: 3 },
            ],
        };
    },
    mounted() {
        setTimeout(() => {
            this.greeting = "Changed";
        }, 3000);
    },
    methods: {
        toggle() {
            this.active = !this.active;
        },
    },
    computed: {
        completedAssignments() {
            return this.assignments.filter(a => a.complete);
        },
        inProgressAssignments() {
            return this.assignments.filter(a => !a.complete);
        },
    },
};
