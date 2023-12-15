import InputField from "../../global/components/InputField"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLazySendSupportQuery } from "../../APISlices/support";
import { toast } from "react-toastify";
import { useState } from "react";

const Support = () => {
  //States
  const [supportData, setSupportData] = useState(null)

  //API call - ETK
  const [sendQuery, { isFetching }] = useLazySendSupportQuery()


  //==> Yup-Formik validations <==
  const validationSchema = Yup.object({
    uuid: Yup.string().required('Please enter request ID'),
  })
  const initialValues = {
    uuid: '',
  }
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      sendQuery(values).unwrap().then((res) => {
        setSupportData(res)
      }).catch((err) => {
        toast.error("Unable to find the support request with this ID");
        console.error('err', err)
      })
    }
  })
  const { values, touched, errors, submitForm, handleChange, handleBlur, resetForm } = formik

  //==> Functionalities <==
  //Clear from
  const clearForm = () => {
    resetForm()
    setSupportData(null)
  }


  return (
    <div>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl	pt-10">Support Requests
        </h2>
        <form className="space-y-4 md:space-y-4 my-10" action="#">
          <div className="grid grid-cols-4 gap-4">
            <div className='col-span-2'>
              <label htmlFor="time-to" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Request ID
              </label>
              <InputField
                type="text"
                id="time-to"
                placeholder="Enter Request ID"
                required
                name="uuid"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.uuid}
              />
              {touched.uuid && errors.uuid && <div className="text-red-500 text-sm">{errors.uuid}</div>}
            </div>
          </div>

          <div className="text-center col-s flex gap-2 item-center">
            <button
              disabled={isFetching}
              className={`w-28 text-white py-2 rounded-md ${isFetching || supportData ? 'bg-[lightgray] cursor-default' : 'bg-primary-600 hover:bg-primary-700'}`}
              onClick={(e) => { e.preventDefault(); submitForm() }}
            >
              Submit
            </button>
            {
              supportData && <button
                className='w-28	 text-white py-2 rounded-md bg-primary-600 hover:bg-primary-700'
                onClick={clearForm}
              >
                Clear
              </button>
            }
          </div>
        </form>

        {supportData && <div className="relative rounded-xl overflow-auto bg-[#f8fafc] mb-5">
          <div className="shadow-sm overflow-hidden">
            <table className="border-collapse table-auto w-full text-sm">
              <thead>
                <tr>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 pt-3 text-slate-800 dark:text-slate-200 text-left">Type</th>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 pt-3 text-slate-800 dark:text-slate-200 text-left">Details</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-800">
                {
                  Object.keys(supportData)?.map((key, index) => {
                    return (
                      <tr key={index}>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-600 dark:text-slate-400">{key ?? ''}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-600 dark:text-slate-400">{supportData[key] ?? ''}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Support