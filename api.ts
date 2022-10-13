import { request, RequestUrlParam } from 'obsidian'

// è async? come lo gestisco?
export default class HTBApi{

    private apiToken: string;
    private baseUrlApi: string;

    public constructor (apiToken: string){
        this.apiToken = apiToken;
        this.baseUrlApi = 'https://www.hackthebox.com/api/v4/'
    }

    public get(endpointPath: string) {        
        var requestOptions: RequestUrlParam = {
            method: 'GET',
            url: this.baseUrlApi+endpointPath, 
            headers: { Authorization: "Bearer " + this.apiToken , 'Accept': "application/json, */*" }
        };
        
        return request(requestOptions)
            .then(response => response)
            .catch(error => console.log('error', error));
    }

	/**
	 * Machines
	 */
	public getCompleteMachineProfileById(idProfile : string) {
		return this.get('profile/progress/machines/os/'+idProfile)
	}

}