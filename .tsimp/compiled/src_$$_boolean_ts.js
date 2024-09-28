export default function boolean(key) {
    switch (process.env[key]) {
        case 'true':
        case '1': {
            return true;
        }
        case 'false':
        case '0': {
            return false;
        }
        default: {
            return undefined;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi5qcyIsInNvdXJjZVJvb3QiOiIvVm9sdW1lcy9Qcm9qZWN0cy90cy1lbnYvIiwic291cmNlcyI6WyJzcmMvYm9vbGVhbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsT0FBTyxVQUFVLE9BQU8sQ0FBQyxHQUFXO0lBQ3pDLFFBQVEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQ3pCLEtBQUssTUFBTSxDQUFDO1FBQ1osS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUQsS0FBSyxPQUFPLENBQUM7UUFDYixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDVCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7UUFFRCxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ1IsT0FBTyxTQUFTLENBQUM7UUFDbkIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIn0=