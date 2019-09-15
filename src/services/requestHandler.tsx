export class RequestHandler {
    root: string = "";
    client_id: string = "8f10f55811fdcb3293b111fc3398c25e6c5a0323d672721ebb0459e8ecc12831";
    
    progressCallback: Function = () => {};

    constructor(root: string | undefined, progressCallback?: Function) {
        if (root) {
            this.root = root;
        } 
        
        if (progressCallback) {
            this.progressCallback = progressCallback;
        }
    }

    private request = (method: string, resource: string): Promise<any> => {
        let self = this;

        return new Promise(function(fullfill, reject) {
            let xhr = new XMLHttpRequest();
            let url = self.root + resource;
            xhr.open(method, url, true);
            if (self.progressCallback) {
                xhr.onprogress = function(e: ProgressEvent) {
                    self.progressCallback(e);
                };
            }
            xhr.onreadystatechange = function() {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        fullfill(xhr.responseText);
                    } else {
                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send();
        });
    };
    
    async get(resource: string): Promise<any> {
        let result: any;
        try {
            let response = await this.request("GET", resource);
            result = JSON.parse(response);
            return result;
        } catch {
            result = {
                success: false,
                message: "GET request failed",
                data: null
            };
            return result;
        }
    }
}