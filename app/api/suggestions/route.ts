export async function GET (req: Request) {
    const { searchParams } = new URL(req.url);
    const term = searchParams.get('term');

    // https://disney-clone-witty.azurewebsites.net/api/getaisuggestions


    const res = await fetch(`https://disney-clone-witty.azurewebsites.net/api/getaisuggestions?term=${term}`, {
        method: 'GET',
        next: {
            revalidate: 60 * 60 * 24, // 24 hours
        }
    });

    const message = await res.text();

    return Response.json({ message })
    

};