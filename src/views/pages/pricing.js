import React, { useState, useEffect } from 'react'
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CButton,
  CFormFloating,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CInputGroup,
  CSpinner,
} from '@coreui/react'
import { getPageData, updataPageData, uploadImages } from 'src/services/pages_services'
import { useLocation } from 'react-router-dom'

export default function Pricing() {
  // const location = useLocation()
  const pageName = 'pricing'

  useEffect(() => {
    gettingPageData()
  }, [pageName])

  const [pageData, setPageData] = useState(null)
  const [pageImages, setPageImages] = useState(null)
  const [loading, setLoading] = useState(true)

  const gettingPageData = async () => {
    await getPageData(pageName).then((res) => {
      setPageData(res)
      setLoading(false)

      console.log('pageData', res)
    })
  }

  const postpageData = async () => {
    setLoading(true)
    if (pageImages) {
      await uploadImages(pageImages).then((res) => {
        if (res) {
          const imageData = res.data.data
          Object.values(imageData).map((key) => {
            const { section, name, value } = key
            const pageDataC = { ...pageData }
            pageDataC[section][name] = value
            setPageData(pageDataC)
          })
        }
      })
    }
    await updataPageData(pageName, pageData)
    setLoading(false)
  }

  const onChangeValue = (e, section, name) => {
    e.preventDefault()
    setPageData({ ...pageData, [`${section}`]: { ...pageData[section], [name]: e.target.value } })
  }

  const onChangeImageValue = (e, section, name) => {
    e.preventDefault()
    setPageImages({
      ...pageImages,
      [`${section}_${name}`]: e.target.files[0],
    })
  }

  return (
    <div className="pb-5">
      {pageData && !loading ? (
        <>
          <Section1
            pageData={pageData}
            section="section1"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section2Tab1
            pageData={pageData}
            section="section2Tab1"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section2Tab2
            pageData={pageData}
            section="section2Tab2"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section3
            pageData={pageData}
            section="section3"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section3Drop1
            pageData={pageData}
            section="section3Drop1"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section3Drop2
            pageData={pageData}
            section="section3Drop2"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section3Drop3
            pageData={pageData}
            section="section3Drop3"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section3Drop4
            pageData={pageData}
            section="section3Drop4"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section3Drop5
            pageData={pageData}
            section="section3Drop5"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />

          <Section4
            pageData={pageData}
            section="section4"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section4Drop1
            pageData={pageData}
            section="section4Drop1"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section4Drop2
            pageData={pageData}
            section="section4Drop2"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section4Drop3
            pageData={pageData}
            section="section4Drop3"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section4Drop4
            pageData={pageData}
            section="section4Drop4"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section4Drop5
            pageData={pageData}
            section="section4Drop5"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section4Drop6
            pageData={pageData}
            section="section4Drop6"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section4Drop7
            pageData={pageData}
            section="section4Drop7"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section4Drop8
            pageData={pageData}
            section="section4Drop8"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section4Drop9
            pageData={pageData}
            section="section4Drop9"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section5
            pageData={pageData}
            section="section5"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <div className="d-grid gap-2 m-3">
            <CButton onClick={() => postpageData()} color="primary">
              Submit
            </CButton>
          </div>
        </>
      ) : (
        <CSpinner color="success" />
      )}
    </div>
  )
}

const Section1 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section1 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section1</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                floatingLabel="title1_en"
                value={data.title1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_fa')}
                id="floatingTextarea"
                value={data.title1_fa}
                floatingLabel="title1_fa"
              />
            </CInputGroup>
            <CInputGroup>
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title2_en')}
                id="floatingTextarea"
                value={data.title2_en}
                floatingLabel="title2_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title2_fa')}
                id="floatingTextarea"
                value={data.title2_fa}
                floatingLabel="title2_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section1 */}
    </div>
  )
}

const Section2Tab1 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section2Tab1 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section2Tab1</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                value={data.title1_en}
                floatingLabel="title1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_fa')}
                id="floatingTextarea"
                value={data.title1_fa}
                floatingLabel="title1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title1_en')}
                id="floatingTextarea"
                value={data.s_title1_en}
                floatingLabel="s_title1_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title1_fa')}
                id="floatingTextarea"
                value={data.s_title1_fa}
                floatingLabel="s_title1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title2_en')}
                id="floatingTextarea"
                value={data.s_title2_en}
                floatingLabel="s_title2_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title2_fa')}
                id="floatingTextarea"
                value={data.s_title2_fa}
                floatingLabel="s_title2_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title3_en')}
                id="floatingTextarea"
                value={data.s_title3_en}
                floatingLabel="s_title3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title3_fa')}
                id="floatingTextarea"
                value={data.s_title3_fa}
                floatingLabel="s_title3_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_fa')}
                id="floatingTextarea"
                value={data.text1_fa}
                floatingLabel="text1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_en')}
                id="floatingTextarea"
                value={data.text2_en}
                floatingLabel="text2_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_fa')}
                id="floatingTextarea"
                value={data.text2_fa}
                floatingLabel="text2_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_en')}
                id="floatingTextarea"
                value={data.text3_en}
                floatingLabel="text3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_fa')}
                id="floatingTextarea"
                value={data.text3_fa}
                floatingLabel="text3_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_en')}
                id="floatingTextarea"
                value={data.text4_en}
                floatingLabel="text4_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_fa')}
                id="floatingTextarea"
                value={data.text4_fa}
                floatingLabel="text4_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_en')}
                id="floatingTextarea"
                value={data.text5_en}
                floatingLabel="text5_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_fa')}
                id="floatingTextarea"
                value={data.text5_fa}
                floatingLabel="text5_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text6_en')}
                id="floatingTextarea"
                value={data.text6_en}
                floatingLabel="text6_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text6_fa')}
                id="floatingTextarea"
                value={data.text6_fa}
                floatingLabel="text6_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text7_en')}
                id="floatingTextarea"
                value={data.text7_en}
                floatingLabel="text7_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text7_fa')}
                id="floatingTextarea"
                value={data.text7_fa}
                floatingLabel="text7_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text8_en')}
                id="floatingTextarea"
                value={data.text8_en}
                floatingLabel="text8_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text8_fa')}
                id="floatingTextarea"
                value={data.text8_fa}
                floatingLabel="text8_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text9_en')}
                id="floatingTextarea"
                value={data.text9_en}
                floatingLabel="text9_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text9_fa')}
                id="floatingTextarea"
                value={data.text9_fa}
                floatingLabel="text9_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text10_en')}
                id="floatingTextarea"
                value={data.text10_en}
                floatingLabel="text10_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text10_fa')}
                id="floatingTextarea"
                value={data.text10_fa}
                floatingLabel="text10_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text11_en')}
                id="floatingTextarea"
                value={data.text11_en}
                floatingLabel="text11_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text11_fa')}
                id="floatingTextarea"
                value={data.text11_fa}
                floatingLabel="text11_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text12_en')}
                id="floatingTextarea"
                value={data.text12_en}
                floatingLabel="text12_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text12_fa')}
                id="floatingTextarea"
                value={data.text12_fa}
                floatingLabel="text12_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'button1_en')}
                id="floatingTextarea"
                value={data.button1_en}
                floatingLabel="button1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'button1_fa')}
                id="floatingTextarea"
                value={data.button1_fa}
                floatingLabel="button1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'button2_en')}
                id="floatingTextarea"
                value={data.button2_en}
                floatingLabel="button2_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'button2_fa')}
                id="floatingTextarea"
                value={data.button2_fa}
                floatingLabel="button2_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'button3_en')}
                id="floatingTextarea"
                value={data.button3_en}
                floatingLabel="button3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'button3_fa')}
                id="floatingTextarea"
                value={data.button3_fa}
                floatingLabel="button3_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section2Tab1 */}
    </div>
  )
}

const Section2Tab2 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section2Tab2 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section2Tab2</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                value={data.title1_en}
                floatingLabel="title1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_fa')}
                id="floatingTextarea"
                value={data.title1_fa}
                floatingLabel="title1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title1_en')}
                id="floatingTextarea"
                value={data.s_title1_en}
                floatingLabel="s_title1_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title1_fa')}
                id="floatingTextarea"
                value={data.s_title1_fa}
                floatingLabel="s_title1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title2_en')}
                id="floatingTextarea"
                value={data.s_title2_en}
                floatingLabel="s_title2_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title2_fa')}
                id="floatingTextarea"
                value={data.s_title2_fa}
                floatingLabel="s_title2_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title3_en')}
                id="floatingTextarea"
                value={data.s_title3_en}
                floatingLabel="s_title3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title3_fa')}
                id="floatingTextarea"
                value={data.s_title3_fa}
                floatingLabel="s_title3_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_fa')}
                id="floatingTextarea"
                value={data.text1_fa}
                floatingLabel="text1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_en')}
                id="floatingTextarea"
                value={data.text2_en}
                floatingLabel="text2_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_fa')}
                id="floatingTextarea"
                value={data.text2_fa}
                floatingLabel="text2_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_en')}
                id="floatingTextarea"
                value={data.text3_en}
                floatingLabel="text3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_fa')}
                id="floatingTextarea"
                value={data.text3_fa}
                floatingLabel="text3_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_en')}
                id="floatingTextarea"
                value={data.text4_en}
                floatingLabel="text4_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_fa')}
                id="floatingTextarea"
                value={data.text4_fa}
                floatingLabel="text4_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_en')}
                id="floatingTextarea"
                value={data.text5_en}
                floatingLabel="text5_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_fa')}
                id="floatingTextarea"
                value={data.text5_fa}
                floatingLabel="text5_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text6_en')}
                id="floatingTextarea"
                value={data.text6_en}
                floatingLabel="text6_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text6_fa')}
                id="floatingTextarea"
                value={data.text6_fa}
                floatingLabel="text6_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text7_en')}
                id="floatingTextarea"
                value={data.text7_en}
                floatingLabel="text7_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text7_fa')}
                id="floatingTextarea"
                value={data.text7_fa}
                floatingLabel="text7_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text8_en')}
                id="floatingTextarea"
                value={data.text8_en}
                floatingLabel="text8_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text8_fa')}
                id="floatingTextarea"
                value={data.text8_fa}
                floatingLabel="text8_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text9_en')}
                id="floatingTextarea"
                value={data.text9_en}
                floatingLabel="text9_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text9_fa')}
                id="floatingTextarea"
                value={data.text9_fa}
                floatingLabel="text9_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text10_en')}
                id="floatingTextarea"
                value={data.text10_en}
                floatingLabel="text10_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text10_fa')}
                id="floatingTextarea"
                value={data.text10_fa}
                floatingLabel="text10_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text11_en')}
                id="floatingTextarea"
                value={data.text11_en}
                floatingLabel="text11_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text11_fa')}
                id="floatingTextarea"
                value={data.text11_fa}
                floatingLabel="text11_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text12_en')}
                id="floatingTextarea"
                value={data.text12_en}
                floatingLabel="text12_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text12_fa')}
                id="floatingTextarea"
                value={data.text12_fa}
                floatingLabel="text12_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'button1_en')}
                id="floatingTextarea"
                value={data.button1_en}
                floatingLabel="button1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'button1_fa')}
                id="floatingTextarea"
                value={data.button1_fa}
                floatingLabel="button1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'button2_en')}
                id="floatingTextarea"
                value={data.button2_en}
                floatingLabel="button2_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'button2_fa')}
                id="floatingTextarea"
                value={data.button2_fa}
                floatingLabel="button2_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'button3_en')}
                id="floatingTextarea"
                value={data.button3_en}
                floatingLabel="button3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'button3_fa')}
                id="floatingTextarea"
                value={data.button3_fa}
                floatingLabel="button3_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section2Tab2 */}
    </div>
  )
}
const Section3 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section3 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section3</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                floatingLabel="title1_en"
                value={data.title1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_fa')}
                id="floatingTextarea"
                value={data.title1_fa}
                floatingLabel="title1_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section3 */}
    </div>
  )
}
const Section3Drop1 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section3Drop1 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section3Drop1</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                value={data.title1_en}
                floatingLabel="title1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_fa')}
                id="floatingTextarea"
                value={data.title1_fa}
                floatingLabel="title1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title1_en')}
                id="floatingTextarea"
                value={data.s_title1_en}
                floatingLabel="s_title1_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title1_fa')}
                id="floatingTextarea"
                value={data.s_title1_fa}
                floatingLabel="s_title1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title2_en')}
                id="floatingTextarea"
                value={data.s_title2_en}
                floatingLabel="s_title2_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title2_fa')}
                id="floatingTextarea"
                value={data.s_title2_fa}
                floatingLabel="s_title2_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title3_en')}
                id="floatingTextarea"
                value={data.s_title3_en}
                floatingLabel="s_title3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title3_fa')}
                id="floatingTextarea"
                value={data.s_title3_fa}
                floatingLabel="s_title3_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_fa')}
                id="floatingTextarea"
                value={data.text1_fa}
                floatingLabel="text1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_en')}
                id="floatingTextarea"
                value={data.text2_en}
                floatingLabel="text2_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_fa')}
                id="floatingTextarea"
                value={data.text2_fa}
                floatingLabel="text2_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_en')}
                id="floatingTextarea"
                value={data.text3_en}
                floatingLabel="text3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_fa')}
                id="floatingTextarea"
                value={data.text3_fa}
                floatingLabel="text3_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_en')}
                id="floatingTextarea"
                value={data.text4_en}
                floatingLabel="text4_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_fa')}
                id="floatingTextarea"
                value={data.text4_fa}
                floatingLabel="text4_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_en')}
                id="floatingTextarea"
                value={data.text5_en}
                floatingLabel="text5_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_fa')}
                id="floatingTextarea"
                value={data.text5_fa}
                floatingLabel="text5_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text6_en')}
                id="floatingTextarea"
                value={data.text6_en}
                floatingLabel="text6_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text6_fa')}
                id="floatingTextarea"
                value={data.text6_fa}
                floatingLabel="text6_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text7_en')}
                id="floatingTextarea"
                value={data.text7_en}
                floatingLabel="text7_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text7_fa')}
                id="floatingTextarea"
                value={data.text7_fa}
                floatingLabel="text7_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text8_en')}
                id="floatingTextarea"
                value={data.text8_en}
                floatingLabel="text8_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text8_fa')}
                id="floatingTextarea"
                value={data.text8_fa}
                floatingLabel="text8_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text9_en')}
                id="floatingTextarea"
                value={data.text9_en}
                floatingLabel="text9_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text9_fa')}
                id="floatingTextarea"
                value={data.text9_fa}
                floatingLabel="text9_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section3Drop1 */}
    </div>
  )
}

const Section3Drop2 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section3Drop2 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section3Drop2</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                value={data.title1_en}
                floatingLabel="title1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_fa')}
                id="floatingTextarea"
                value={data.title1_fa}
                floatingLabel="title1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title1_en')}
                id="floatingTextarea"
                value={data.s_title1_en}
                floatingLabel="s_title1_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title1_fa')}
                id="floatingTextarea"
                value={data.s_title1_fa}
                floatingLabel="s_title1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title2_en')}
                id="floatingTextarea"
                value={data.s_title2_en}
                floatingLabel="s_title2_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title2_fa')}
                id="floatingTextarea"
                value={data.s_title2_fa}
                floatingLabel="s_title2_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title3_en')}
                id="floatingTextarea"
                value={data.s_title3_en}
                floatingLabel="s_title3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title3_fa')}
                id="floatingTextarea"
                value={data.s_title3_fa}
                floatingLabel="s_title3_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_fa')}
                id="floatingTextarea"
                value={data.text1_fa}
                floatingLabel="text1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_en')}
                id="floatingTextarea"
                value={data.text2_en}
                floatingLabel="text2_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_fa')}
                id="floatingTextarea"
                value={data.text2_fa}
                floatingLabel="text2_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_en')}
                id="floatingTextarea"
                value={data.text3_en}
                floatingLabel="text3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_fa')}
                id="floatingTextarea"
                value={data.text3_fa}
                floatingLabel="text3_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_en')}
                id="floatingTextarea"
                value={data.text4_en}
                floatingLabel="text4_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_fa')}
                id="floatingTextarea"
                value={data.text4_fa}
                floatingLabel="text4_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_en')}
                id="floatingTextarea"
                value={data.text5_en}
                floatingLabel="text5_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_fa')}
                id="floatingTextarea"
                value={data.text5_fa}
                floatingLabel="text5_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text6_en')}
                id="floatingTextarea"
                value={data.text6_en}
                floatingLabel="text6_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text6_fa')}
                id="floatingTextarea"
                value={data.text6_fa}
                floatingLabel="text6_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section3Drop2 */}
    </div>
  )
}

const Section3Drop3 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section3Drop3 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section3Drop3</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                value={data.title1_en}
                floatingLabel="title1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_fa')}
                id="floatingTextarea"
                value={data.title1_fa}
                floatingLabel="title1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title1_en')}
                id="floatingTextarea"
                value={data.s_title1_en}
                floatingLabel="s_title1_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title1_fa')}
                id="floatingTextarea"
                value={data.s_title1_fa}
                floatingLabel="s_title1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title2_en')}
                id="floatingTextarea"
                value={data.s_title2_en}
                floatingLabel="s_title2_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title2_fa')}
                id="floatingTextarea"
                value={data.s_title2_fa}
                floatingLabel="s_title2_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title3_en')}
                id="floatingTextarea"
                value={data.s_title3_en}
                floatingLabel="s_title3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title3_fa')}
                id="floatingTextarea"
                value={data.s_title3_fa}
                floatingLabel="s_title3_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_fa')}
                id="floatingTextarea"
                value={data.text1_fa}
                floatingLabel="text1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_en')}
                id="floatingTextarea"
                value={data.text2_en}
                floatingLabel="text2_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_fa')}
                id="floatingTextarea"
                value={data.text2_fa}
                floatingLabel="text2_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_en')}
                id="floatingTextarea"
                value={data.text3_en}
                floatingLabel="text3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_fa')}
                id="floatingTextarea"
                value={data.text3_fa}
                floatingLabel="text3_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_en')}
                id="floatingTextarea"
                value={data.text4_en}
                floatingLabel="text4_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_fa')}
                id="floatingTextarea"
                value={data.text4_fa}
                floatingLabel="text4_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section3Drop3 */}
    </div>
  )
}

const Section3Drop4 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section3Drop4 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section3Drop4</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                value={data.title1_en}
                floatingLabel="title1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_fa')}
                id="floatingTextarea"
                value={data.title1_fa}
                floatingLabel="title1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title1_en')}
                id="floatingTextarea"
                value={data.s_title1_en}
                floatingLabel="s_title1_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title1_fa')}
                id="floatingTextarea"
                value={data.s_title1_fa}
                floatingLabel="s_title1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title2_en')}
                id="floatingTextarea"
                value={data.s_title2_en}
                floatingLabel="s_title2_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title2_fa')}
                id="floatingTextarea"
                value={data.s_title2_fa}
                floatingLabel="s_title2_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title3_en')}
                id="floatingTextarea"
                value={data.s_title3_en}
                floatingLabel="s_title3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title3_fa')}
                id="floatingTextarea"
                value={data.s_title3_fa}
                floatingLabel="s_title3_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_fa')}
                id="floatingTextarea"
                value={data.text1_fa}
                floatingLabel="text1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_en')}
                id="floatingTextarea"
                value={data.text2_en}
                floatingLabel="text2_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_fa')}
                id="floatingTextarea"
                value={data.text2_fa}
                floatingLabel="text2_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_en')}
                id="floatingTextarea"
                value={data.text3_en}
                floatingLabel="text3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_fa')}
                id="floatingTextarea"
                value={data.text3_fa}
                floatingLabel="text3_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_en')}
                id="floatingTextarea"
                value={data.text4_en}
                floatingLabel="text4_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_fa')}
                id="floatingTextarea"
                value={data.text4_fa}
                floatingLabel="text4_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section3Drop4 */}
    </div>
  )
}

const Section3Drop5 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section3Drop5 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section3Drop5</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                value={data.title1_en}
                floatingLabel="title1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_fa')}
                id="floatingTextarea"
                value={data.title1_fa}
                floatingLabel="title1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title1_en')}
                id="floatingTextarea"
                value={data.s_title1_en}
                floatingLabel="s_title1_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title1_fa')}
                id="floatingTextarea"
                value={data.s_title1_fa}
                floatingLabel="s_title1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title2_en')}
                id="floatingTextarea"
                value={data.s_title2_en}
                floatingLabel="s_title2_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title2_fa')}
                id="floatingTextarea"
                value={data.s_title2_fa}
                floatingLabel="s_title2_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title3_en')}
                id="floatingTextarea"
                value={data.s_title3_en}
                floatingLabel="s_title3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 's_title3_fa')}
                id="floatingTextarea"
                value={data.s_title3_fa}
                floatingLabel="s_title3_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_fa')}
                id="floatingTextarea"
                value={data.text1_fa}
                floatingLabel="text1_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_en')}
                id="floatingTextarea"
                value={data.text2_en}
                floatingLabel="text2_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_fa')}
                id="floatingTextarea"
                value={data.text2_fa}
                floatingLabel="text2_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_en')}
                id="floatingTextarea"
                value={data.text3_en}
                floatingLabel="text3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_fa')}
                id="floatingTextarea"
                value={data.text3_fa}
                floatingLabel="text3_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_en')}
                id="floatingTextarea"
                value={data.text4_en}
                floatingLabel="text4_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_fa')}
                id="floatingTextarea"
                value={data.text4_fa}
                floatingLabel="text4_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_en')}
                id="floatingTextarea"
                value={data.text5_en}
                floatingLabel="text5_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_fa')}
                id="floatingTextarea"
                value={data.text5_fa}
                floatingLabel="text5_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text6_en')}
                id="floatingTextarea"
                value={data.text6_en}
                floatingLabel="text6_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text6_fa')}
                id="floatingTextarea"
                value={data.text6_fa}
                floatingLabel="text6_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text7_en')}
                id="floatingTextarea"
                value={data.text7_en}
                floatingLabel="text7_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text7_fa')}
                id="floatingTextarea"
                value={data.text7_fa}
                floatingLabel="text7_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section3Drop5 */}
    </div>
  )
}

const Section4 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section4 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section4</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                floatingLabel="title1_en"
                value={data.title1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_fa')}
                id="floatingTextarea"
                value={data.title1_fa}
                floatingLabel="title1_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section4 */}
    </div>
  )
}

const Section4Drop1 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section4Drop1 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section4Drop1</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                floatingLabel="title1_en"
                value={data.title1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_fa')}
                id="floatingTextarea"
                value={data.title1_fa}
                floatingLabel="title1_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                floatingLabel="text1_en"
                value={data.text1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_fa')}
                id="floatingTextarea"
                value={data.text1_fa}
                floatingLabel="text1_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section4Drop1 */}
    </div>
  )
}
const Section4Drop2 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section4Drop2 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section4Drop2</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                floatingLabel="title1_en"
                value={data.title1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_fa')}
                id="floatingTextarea"
                value={data.title1_fa}
                floatingLabel="title1_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                floatingLabel="text1_en"
                value={data.text1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_fa')}
                id="floatingTextarea"
                value={data.text1_fa}
                floatingLabel="text1_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section4Drop2 */}
    </div>
  )
}
const Section4Drop3 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section4Drop3 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section4Drop3</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                floatingLabel="title1_en"
                value={data.title1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_fa')}
                id="floatingTextarea"
                value={data.title1_fa}
                floatingLabel="title1_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                floatingLabel="text1_en"
                value={data.text1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_fa')}
                id="floatingTextarea"
                value={data.text1_fa}
                floatingLabel="text1_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section4Drop3 */}
    </div>
  )
}
const Section4Drop4 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section4Drop4 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section4Drop4</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                floatingLabel="title1_en"
                value={data.title1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_fa')}
                id="floatingTextarea"
                value={data.title1_fa}
                floatingLabel="title1_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                floatingLabel="text1_en"
                value={data.text1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_fa')}
                id="floatingTextarea"
                value={data.text1_fa}
                floatingLabel="text1_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section4Drop4 */}
    </div>
  )
}
const Section4Drop5 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section4Drop5 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section4Drop5</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                floatingLabel="title1_en"
                value={data.title1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_fa')}
                id="floatingTextarea"
                value={data.title1_fa}
                floatingLabel="title1_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                floatingLabel="text1_en"
                value={data.text1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_fa')}
                id="floatingTextarea"
                value={data.text1_fa}
                floatingLabel="text1_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section4Drop5 */}
    </div>
  )
}
const Section4Drop6 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section4Drop6 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section4Drop6</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                floatingLabel="title1_en"
                value={data.title1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_fa')}
                id="floatingTextarea"
                value={data.title1_fa}
                floatingLabel="title1_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                floatingLabel="text1_en"
                value={data.text1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_fa')}
                id="floatingTextarea"
                value={data.text1_fa}
                floatingLabel="text1_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section4Drop6 */}
    </div>
  )
}
const Section4Drop7 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section4Drop7 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section4Drop7</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                floatingLabel="title1_en"
                value={data.title1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_fa')}
                id="floatingTextarea"
                value={data.title1_fa}
                floatingLabel="title1_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                floatingLabel="text1_en"
                value={data.text1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_fa')}
                id="floatingTextarea"
                value={data.text1_fa}
                floatingLabel="text1_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section4Drop7 */}
    </div>
  )
}
const Section4Drop8 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section4Drop8 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section4Drop8</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                floatingLabel="title1_en"
                value={data.title1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_fa')}
                id="floatingTextarea"
                value={data.title1_fa}
                floatingLabel="title1_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                floatingLabel="text1_en"
                value={data.text1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_fa')}
                id="floatingTextarea"
                value={data.text1_fa}
                floatingLabel="text1_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section4Drop8 */}
    </div>
  )
}
const Section4Drop9 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section4Drop9 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section4Drop9</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                floatingLabel="title1_en"
                value={data.title1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_fa')}
                id="floatingTextarea"
                value={data.title1_fa}
                floatingLabel="title1_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                floatingLabel="text1_en"
                value={data.text1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_fa')}
                id="floatingTextarea"
                value={data.text1_fa}
                floatingLabel="text1_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section4Drop9 */}
    </div>
  )
}

const Section5 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section5 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section5</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'button_en')}
                id="floatingTextarea"
                floatingLabel="button_en"
                value={data.button_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'button_fa')}
                id="floatingTextarea"
                value={data.button_fa}
                floatingLabel="button_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section5 */}
    </div>
  )
}
