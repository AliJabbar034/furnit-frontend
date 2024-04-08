

const productUrl=`${import.meta.env.VITE_REACT_APP_API_URL}/products`

   interface queryType{
  title?:string,
  price?:{
    gt?:number,
    lt?:number
  },
  colors?:string,
  sort?:number,
  
}



export const getAllProducts = async (query?:queryType)=> {

    let queryString = '';

    if (query) {
      
        Object.entries(query).forEach(([key, value]) => {
       
            if (value !== undefined && value !== null) {
               
                if (queryString === '') {
                    queryString += `?${key}=${value}`;
                } else {
                   
                    queryString += `&${key}=${value}`;
                }
            }
        });
    }

   

 

    const response= await fetch(`${productUrl}/${queryString}`,{
        method:'GET',
        headers:{
            "Content-Type":"application/json"
        }
    })

    if (!response.ok){
        throw new Error("could't fetch")
    }

    const data= await response.json();

    console.log(data);
    
    return data



}


export type   Queries= queryType