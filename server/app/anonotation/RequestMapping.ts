
export default function RequestMapping(path:any) {
   
    return  function RequestMapping(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    }

}