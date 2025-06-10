// const PROJECT_ID= import.meta.env.VITE_APPWRITE_PROJECT_ID;
// const DATABASE_ID= import.meta.env.VITE_APPWRITE_DATABASE_ID;
// const COLLECTION_ID= import.meta.env.VITE_APPWRITE_COLLECTION_ID;
// const VITE_APPWRITE_PROJECT_ID='683fa44f002d0eb169eb'
// const VITE_APPWRITE_DATABASE_ID='6840ca7b001f726ff256'
// const VITE_APPWRITE_COLLECTION_ID='6840cbe90002c090136a'

import { Client, Databases, ID, Query } from "appwrite";



// export const updateSearchCount = async () => {
//   console.log(PROJECT_ID, DATABASE_ID, COLLECTION_ID);  
// }
// ✅ Hardcoded values
const PROJECT_ID = '683fa44f002d0eb169eb';
const DATABASE_ID = '6840ca7b001f726ff256';
const COLLECTION_ID = '6840cbe90002c090136a';

const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject(PROJECT_ID)

const database = new Databases(client);

export const updateSearchCount = async (searchTerm,movie) => {
  
    try{
const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID,[
    Query.equal('searchTerm', searchTerm),
] )
if(result.documents.length > 0){
    const doc= result.documents[0];
    await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
        count: doc.count + 1,
    })
}else {
    await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        searchTerm,
        count: 1,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    })
}

  }catch(error){
    console.error(error);
  }
}
export const getTrendingMovies = async () => {
 try {
  const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
    Query.limit(5),
    Query.orderDesc("count")
  ])

  return result.documents;
 } catch (error) {
  console.error(error);
 }
}