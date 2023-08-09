export const load = (async ({ locals }) => {
    //console.log(locals.user)
    if (!locals.user) {
        return {
            user: locals.user,
        }
    }

    if (!locals.homegameData) {
        return {
            user: locals.user,
        }
    }
    

    return {
        user: locals.user,
        homegameData: locals.homegameData,
    }

});