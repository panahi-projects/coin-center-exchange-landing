export const formatNumber = (number: number | string) => {
    if (number) {
        // Convert the number to a string
        let numStr = number.toString()

        // Split the number into integer and decimal parts
        let parts = numStr.split('.')

        // Format the integer part with commas
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')

        // Join the integer and decimal parts back together
        return parts.join('.')
    }
}