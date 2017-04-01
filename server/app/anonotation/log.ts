
export default function Log(path:any) {
   
    return  function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("------------------LOG ----------------------------------");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    console.log("------------------LOG ----------------------------------");
    }

}