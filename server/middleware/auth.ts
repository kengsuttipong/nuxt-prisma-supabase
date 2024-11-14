export default defineEventHandler(event => {
    //console.log("Auth middleware" + event.context);
    event.context.auth = {
        user: 'join',
        role: 'admin',
        permission: ['read', 'white']
    }

    //console.log(event.context.auth)
})