export default function stringArray(key, separator = ',') {
    const rawValue = process.env[key];
    if (!rawValue) {
        return undefined;
    }
    return rawValue.split(separator);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWFycmF5LmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL1Byb2plY3RzL3RzLWVudi8iLCJzb3VyY2VzIjpbInNyYy9zdHJpbmctYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE9BQU8sVUFBVSxXQUFXLENBQUMsR0FBVyxFQUFFLFNBQVMsR0FBRyxHQUFHO0lBQzlELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuQyxDQUFDIn0=