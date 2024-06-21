const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteBillsId: String(import.meta.env.VITE_APPWRITE_BILL_COLLECTION_ID),
    appwriteMenuId: String(import.meta.env.VITE_APPWRITE_MENU_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}


export default conf;