export const Tabs = ({ children }) => <div>{children}</div>;
export const TabsList = ({ children }) => <div className="flex space-x-2">{children}</div>;
export const TabsTrigger = ({ children, value }) => <button className="px-4 py-2 bg-gray-200">{children}</button>;
export const TabsContent = ({ children }) => <div className="mt-2">{children}</div>;