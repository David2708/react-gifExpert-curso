
export const getGifs = async(category) => {

    const API = 'KMxlYfv8qs8hmpx7gpYaXN72fCsZ8AAj';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${category}&limit=12`
    const resp = await fetch( url );
    const {data} = await resp.json();
    const gifs = data.map( img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ) );

    // console.log(gifs)
    return gifs;
    

};

