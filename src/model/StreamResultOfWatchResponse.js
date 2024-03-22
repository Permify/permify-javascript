/**
 * Permify API
 * Permify is an open source authorization service for creating fine-grained and scalable authorization systems.
 *
 * The version of the OpenAPI document: v0.7.8
 * Contact: hello@permify.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Status from './Status';
import WatchResponse from './WatchResponse';

/**
 * The StreamResultOfWatchResponse model module.
 * @module model/StreamResultOfWatchResponse
 * @version v0.7.8
 */
class StreamResultOfWatchResponse {
    /**
     * Constructs a new <code>StreamResultOfWatchResponse</code>.
     * @alias module:model/StreamResultOfWatchResponse
     */
    constructor() { 
        
        StreamResultOfWatchResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StreamResultOfWatchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StreamResultOfWatchResponse} obj Optional instance to populate.
     * @return {module:model/StreamResultOfWatchResponse} The populated <code>StreamResultOfWatchResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StreamResultOfWatchResponse();

            if (data.hasOwnProperty('result')) {
                obj['result'] = WatchResponse.constructFromObject(data['result']);
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = Status.constructFromObject(data['error']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>StreamResultOfWatchResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StreamResultOfWatchResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `result`
        if (data['result']) { // data not null
          WatchResponse.validateJSON(data['result']);
        }
        // validate the optional field `error`
        if (data['error']) { // data not null
          Status.validateJSON(data['error']);
        }

        return true;
    }


}



/**
 * @member {module:model/WatchResponse} result
 */
StreamResultOfWatchResponse.prototype['result'] = undefined;

/**
 * @member {module:model/Status} error
 */
StreamResultOfWatchResponse.prototype['error'] = undefined;






export default StreamResultOfWatchResponse;

