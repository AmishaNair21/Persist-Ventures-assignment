import {
    Card,
    CardContent,
    CardTitle,
  } from "@/components/ui/card"

export default function Cardblock() {
    return (
        <Card className="w-26 h-24 md:w-48 md:h-24 lg:w-64 2xl:w-96 2xl:h-48  lg:h-32 bg-gradient-to-r from-purple-500 to-red-500 ">
            <CardContent>
                <div className="flex items-center ml-1 justify-between mt-4 lg:mt-5 "><p className="text-xs lg:text-sm 2xl:text-2xl text-gray-100">Total Revenue</p> <p className="text-xs lg:text-sm 2xl:text-2xl text-gray-100">$</p></div>
                <CardTitle className="mt-2 text-white 2xl:text-5xl">$45,231.89</CardTitle>
            </CardContent>
        </Card>
    )
}
