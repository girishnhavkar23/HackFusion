import Accepted from "@/components/Dashboard/Accepted";
import ExampleNavbarThree from "@/components/Dashboard/Navbar";
import Pending from "@/components/Dashboard/Pending";
import Rejected from "@/components/Dashboard/Rejected";
import ReportComponent from "@/components/Dashboard/ReportComponent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function InvestigatorDash() {
  return (
    <div>
      <ExampleNavbarThree />
      <div className="mx-64">
        <div className="text-[20px] mt-12 font-bold">
          {" "}
          All Problems/Incident Reported{" "}
        </div>
        <div className="flex gap-3 flex-col justify-center mt-5">
          <Tabs defaultValue="pending" className="w-[400px]">
            <div className="flex justify-between">

            <TabsList>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="accepted">Accepted</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
            </TabsList>
            </div>
            <TabsContent value="pending">
              <Pending/>
            </TabsContent>
            <TabsContent value="accepted">
              <Accepted/>
              </TabsContent>
            <TabsContent value="rejected">
              <Rejected/>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default InvestigatorDash;
