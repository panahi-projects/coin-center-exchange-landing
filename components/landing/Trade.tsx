import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "../ui/button";
import { FaPercent } from "react-icons/fa6";
import { formatNumber } from "@/lib/global";

interface Currency {
  id: string;
  title: string;
  name: string;
  lastPrice: string;
  changes: string;
}

const Trade = () => {
  const currencies: Currency[] = [
    {
      id: "btc",
      title: "بیت کوین",
      name: "BTC",
      lastPrice: "4211345334",
      changes: "4.98",
    },
    {
      id: "eth",
      title: "اتریوم",
      name: "ETH",
      lastPrice: "213515100",
      changes: "4.98",
    },
    {
      id: "usdt",
      title: "تتر",
      name: "USDT",
      lastPrice: "59191",
      changes: "-0.14",
    },
    {
      id: "ltc",
      title: "لایت کوین",
      name: "LTC",
      lastPrice: "16076030",
      changes: "19.58",
    },
    {
      id: "shib",
      title: "شیبا",
      name: "SHIB",
      lastPrice: "1349",
      changes: "5.79",
    },
  ];

  const categories = [
    {
      id: "cat-1",
      title: "رمز ارزهای برتر",
      name: "top ones",
    },
    {
      id: "cat-2",
      title: "جدیدترین ها",
      name: "newest",
    },
    {
      id: "cat-3",
      title: "پر سودها",
      name: "most profitable",
    },
  ];
  return (
    <Card className="shadow-none">
      <CardHeader className="border-b-2 sm:p-2 first:pr-0 p-0">
        <div className="flex justify-between">
          <div className="flex justify-start md:w-1/2 w-full">
            {categories.map((cat, index) => (
              <div key={cat.id} className={["px-2 py-2 font-semibold md:mx-4 mx-2 hover:border-b-4 transition-all ease-in-out ", index === 0 ? "active-tab" : ""].join("")}>{cat.title}</div>
            ))}
          </div>
          <div className="sm:block hidden">left</div>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr dir="rtl">
                <th className="sm:px-6 px-2 pr-4 py-3 sm:border-b-0 border-b-2 text-right text-sm leading-4 uppercase tracking-wider">
                  نام رمز ارز
                </th>
                <th className="sm:px-6 px-2 py-3 sm:border-b-0 border-b-2 text-right text-sm leading-4 uppercase tracking-wider">
                  آخرین قیمت
                </th>
                <th className="sm:px-6 px-2 py-3 sm:border-b-0 border-b-2 sm:text-right text-center text-sm leading-4 uppercase tracking-wider">
                  تغییرات
                </th>
                <th className="sm:px-6 px-2 py-3 sm:border-b-0 border-b-2 text-right text-sm leading-4 uppercase tracking-wider mobile-hidden"></th>
              </tr>
            </thead>
            <tbody>
              {currencies.map((currency) => (
                <tr key={currency.id}>
                  <td className="md:px-6 sm:px-4 px-2 pr-4 py-2 whitespace-nowrap">
                    <span>{currency.title}</span>
                    <span className="sm:inline-block block">
                      ({currency.name})
                    </span>
                  </td>
                  <td
                    className="md:px-6 sm:px-4 px-2 py-2 whitespace-nowrap text-right farsi-numbers font-semibold"
                    dir="ltr"
                  >
                    {formatNumber(currency.lastPrice)}
                  </td>
                  <td
                    className="md:px-6 sm:px-4 px-2 py-2 whitespace-nowrap text-right"
                    dir="ltr"
                  >
                    <span
                      className={[
                        "sm:bg-transparent w-full block sm:text-right text-center rounded-sm py-1 sm:text-primary-foreground text-white ",
                        currency.changes.toString().includes("-")
                          ? "bg-danger"
                          : "bg-success",
                      ].join("")}
                    >
                      <span className="inline-block farsi-numbers font-semibold">
                        {currency.changes.toString().includes("-")
                          ? currency.changes
                          : "+" + currency.changes}
                      </span>{" "}
                      <FaPercent className="inline-block" />
                    </span>
                  </td>
                  <td
                    className="md:px-6 sm:px-4 px-2 py-4 whitespace-nowrap mobile-hidden"
                    dir="ltr"
                  >
                    <Button className="md:w-40 sm:w-26 w-full block text-center">
                      خرید / فروش
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
      <CardFooter className="text-center w-full">
        <div className="text-center w-full font-bold">همه رمز ارز ها</div>
      </CardFooter>
    </Card>
  );
};

export default Trade;
