export default defineEventHandler(event => {
    return {
        statusCode: 200,
        message: 'Test post Handler'
    }
})