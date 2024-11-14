export default defineEventHandler(event => {
    if(event.context.auth.role !== 'admin'){
       throw createError({
           statusCode: 403,
           message: 'Unauthorized'
       });
    }

   return {
       name: 'Test',
       role: event.context.auth.role
   }
})