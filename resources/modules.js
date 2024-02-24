{
    `
    <script type="module">
        import message from "./message.js";
    </script>
    `
}

{
    //Export
    {
        `person.js`;

        // export const name = "Jesse";
        // export const age = 40;

        // const name = "Jesse";
        // const age = 40;
        // export {name, age};
    }

    //Default Exports
    {
        // const message = () => {
        //     const name = "Jesse";
        //     const age = 40;
        //     return name + ' is ' + age + 'years old.';
        // };
            
        // export default message;
    }

    //Import from named exports
    {
        // import { name, age } from "./person.js";
    }

    //Import from default exports
    {
        // import message from "./message.js";   
    }
}

