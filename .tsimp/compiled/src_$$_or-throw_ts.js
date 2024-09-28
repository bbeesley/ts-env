export default function orThrow(readFunction, type) {
    return (key) => {
        const value = readFunction(key);
        if (value == null || (type === 'string' && value === '')) {
            throw new Error(`Couldn't read ${type} value from process.env.${key}`);
        }
        return value;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ItdGhyb3cuanMiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvUHJvamVjdHMvdHMtZW52LyIsInNvdXJjZXMiOlsic3JjL29yLXRocm93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxPQUFPLFVBQVUsT0FBTyxDQUM3QixZQUE2QixFQUM3QixJQUFZO0lBRVosT0FBTyxDQUFDLEdBQVcsRUFBRSxFQUFFO1FBQ3JCLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVoQyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3pELE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLElBQUksMkJBQTJCLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDekUsQ0FBQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyJ9