import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function QuestionInfoForm() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Form Container */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <p>
            The Penn State Nittany Lions represent Penn State men`s soccer in
            professional tournaments. To be selected for the squad, players must
            consistently perform well on their campus team or already be at a
            professional level and transfer from another club.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 text-center">
            For further enquiries please fill out the form below.
          </h3>
          <div className="flex mt-4 space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
              Sign Up
            </button>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-md">
              Sign In
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Already have a code?{" "}
            <a href="#" className="text-blue-600">
              Click here
            </a>
          </p>
        </div>

        <hr className="border-gray-300 mb-6" />

        {/* Form */}
        <form>
          <p className="text-sm text-gray-600 mb-4">
            Fields marked with <span className="text-red-500">*</span> are
            mandatory
          </p>

          {/* General Section */}
          <h3 className="text-lg font-semibold text-gray-800 mb-4">General</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-50 py-3 px-4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-50 py-3 px-4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-50 py-3 px-4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Home Address1
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-50 py-3 px-4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Home Address2
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-50 py-3 px-4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-50 py-3 px-4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                State
              </label>
              <Select>
                <SelectTrigger className="w-full border-gray-300 rounded-md shadow-sm bg-gray-50 py-3">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="state1">State 1</SelectItem>
                  <SelectItem value="state2">State 2</SelectItem>
                  <SelectItem value="state3">State 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Zip
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-50 py-3 px-4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-50 py-3 px-4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                CellPhone Number
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-50 py-3 px-4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Graduation Year
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-50 py-3 px-4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Club Team
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-50 py-3 px-4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-50 py-3 px-4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <Select>
                <SelectTrigger className="w-full border-gray-300 rounded-md shadow-sm bg-gray-50 py-3">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Middle Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-50 py-3 px-4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-50 py-3 px-4"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
