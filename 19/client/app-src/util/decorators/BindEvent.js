import { obrigatorio } from '../../util/index.js';

export function bindEvent(
    event = obrigatorio('event'), 
    selector = obrigatorio('selector'), 
    prevent = true) {
    
    return function(target, propertyKey, descriptor) {

        
        Reflect.defineMetadata(
            'bindEvent', 
            { event, selector, prevent, propertyKey }, 
            Object.getPrototypeOf(target), propertyKey);
            
        return descriptor;
    }
}