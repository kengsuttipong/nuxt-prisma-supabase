export default defineEventHandler(event => {
    const id = getRouterParam(event, 'id');

    //http:localhost:3000/users/keng?type=admin&page=1
    const query = getQuery(event);

    return {
        id: id,
        query: {a: query.type, b: query.page},
        name: 'User API from server/routes/users/[id].ts'
    }
})