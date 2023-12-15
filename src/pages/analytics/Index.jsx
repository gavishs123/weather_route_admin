import InputField from '../../global/components/InputField'
import Dropdown from '../../global/components/Dropdown'
import { baseFilter, eventFilters } from '../../constants/dropdownItems'
import MultiselectDropdown from '../../global/components/MultiselectDropdown'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSendAnalyticsMutation } from '../../APISlices/analytics';
import moment from 'moment/moment';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Analytics = () => {
  //States
  const [analyticsData, setAnalyticsData] = useState(null)

  //API call - ETK
  const [sendAnalytics, { isLoading }] = useSendAnalyticsMutation()


  //==> Yup-Formik validations <==
  const validationSchema = Yup.object({
    baseFilter: Yup.string().required('Please select base filter'),
    filters: Yup.array().of(Yup.string()).min(1, 'Please select at least one filter'),
    dtFrom: Yup.date().required('Please select start date'),
    dtTo: Yup.date().test(
      'dateToValidation',
      'Time to should be after than time from',
      (dateTo, context) => {
        let dateFrom = context.parent.dtFrom
        return dateFrom < dateTo
      }).required('Please select end date')
  });
  const initialValues = {
    baseFilter: null,
    filters: [],
    dtFrom: '',
    dtTo: ''
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      let dtFrom = moment(values.dtFrom).format('YYYY/MM/DD')
      let dtTo = moment(values.dtTo).format('YYYY/MM/DD')

      const payload = {
        ...values,
        dtFrom: `${dtFrom}T00:00:00.000+00:00`,
        dtTo: `${dtTo}T00:00:00.000+00:00`
      }
      sendAnalytics(payload).unwrap().then((res) => {
        setAnalyticsData(res)
      }).catch((err) => {
        toast.error("Failed to load analytics results");
        console.error('err', err)
      })
    }
  })
  const { values, touched, errors, submitForm, handleChange, handleBlur, setFieldValue, resetForm } = formik


  //==> Functionalities <==
  //clear form
  const clearForm = (e) => {
    e.preventDefault()
    setAnalyticsData(null)
    resetForm()
  }


  return (
    <div>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl	pt-10">Analytics</h2>
        <form className="space-y-4 md:space-y-4 my-10" action="#">
          <div className="grid grid-cols-4 gap-4">
            <div className='col-span-2'>
              <label htmlFor="time-from" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Time From
              </label>
              <InputField
                type="date"
                id="time-from"
                placeholder="YYYY-MM-dd format; e.g. 2022-06-05"
                required
                name="dtFrom"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dtFrom}
              />
              {touched.dtFrom && errors.dtFrom && <div className='text-red-500 text-sm'>{errors.dtFrom}</div>}
            </div>
            <div className='col-span-2'>
              <label htmlFor="time-to" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Time To
              </label>
              <InputField
                type="date"
                name="dtTo"
                id="time-to"
                placeholder="YYYY-MM-dd format; e.g. 2022-06-06"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dtTo}
              />
              {touched.dtTo && errors.dtTo && <div className='text-red-500 text-sm'>{errors.dtTo}</div>}
            </div>
            <div className="col-span-2">
              <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">Base Filter</label>
              <div className="">
                <Dropdown
                  name='baseFilter'
                  value={values.baseFilter}
                  onChange={(value) => { setFieldValue('baseFilter', value) }}
                  options={baseFilter}
                />
                {touched.baseFilter && errors.baseFilter && <div className='text-red-500 text-sm'>{errors.baseFilter}</div>}
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex items-center">
                <div className="w-full">
                  <label id="listbox-label" className="block text-sm font-medium leading-6 text-gray-900">Add Event Filter</label>
                  <MultiselectDropdown
                    name='filters'
                    value={values.filters}
                    onChange={(value) => { setFieldValue('filters', value.map((item) => item.value)) }}
                    options={eventFilters}
                  />
                  {touched.filters && errors.filters && <div className='text-red-500 text-sm'>{errors.filters}</div>}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center col-s flex gap-2 item-center justify-center">
            <button
              disabled={isLoading}
              className={`w-28 text-white py-2 rounded-md ${isLoading || analyticsData ? 'bg-[lightgray] cursor-default' : 'bg-primary-600 hover:bg-primary-700'}`}
              onClick={(e) => { e.preventDefault(); submitForm() }}
            >
              Submit
            </button>
            {
              analyticsData && <button
                className='w-28	 text-white py-2 rounded-md bg-primary-600 hover:bg-primary-700'
                onClick={clearForm}
              >
                Clear
              </button>
            }
          </div>
        </form>

        {analyticsData && <div className="relative rounded-xl overflow-auto bg-[#f8fafc] mb-5">
          <div className="shadow-sm overflow-hidden">
            <table className="border-collapse table-auto w-full text-sm">
              <thead>
                <tr>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 pt-3 text-slate-800 dark:text-slate-200 text-left">Events</th>
                  <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 pt-3 text-slate-800 dark:text-slate-200 text-left text-center">Analytics</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-800">
                {
                  analyticsData?.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-600 dark:text-slate-400">{data.name ?? ''}</td>
                        <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-600 dark:text-slate-400 text-center">{data.count ?? ''}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>}
      </div >
    </div >
  )
}

export default Analytics