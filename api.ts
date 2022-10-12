import { request, RequestUrlParam } from 'obsidian'

export async function htbApiGet(endpointPath : string, apiToken:string) {
    console.log(apiToken)
    var requestOptions : RequestUrlParam = {
        method: 'GET',
        url: 'https://www.hackthebox.com/api/v4/'+endpointPath, 
        headers: { Authorization: "Bearer " + apiToken , 'Accept': "application/json, */*" }
    };
    
    return request(requestOptions)
        .then(response => response)
        .catch(error => console.log('error', error));

}