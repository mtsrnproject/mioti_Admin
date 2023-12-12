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

export default function Nosotros() {
  // const location = useLocation()
  const pageName = 'nosotros'

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
          <Section2
            pageData={pageData}
            section="section2"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />

          <Section3
            pageData={pageData}
            section="section3"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section4
            pageData={pageData}
            section="section4"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section5
            pageData={pageData}
            section="section5"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section6
            pageData={pageData}
            section="section6"
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
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
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
      {/* Section1 */}
    </div>
  )
}

const Section2 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section2 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section2</CAccordionHeader>
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
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
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
      {/* Section2 */}
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
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
              />
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
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_fa')}
                id="floatingTextarea"
                value={data.text2_fa}
                floatingLabel="text2_fa"
              />
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
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_en')}
                id="floatingTextarea"
                value={data.text4_en}
                floatingLabel="text4_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_fa')}
                id="floatingTextarea"
                value={data.text4_fa}
                floatingLabel="text4_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image1')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image1
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image2')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image2
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image3')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image3
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image4')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image4
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section3 */}
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
                value={data.title1_en}
                floatingLabel="title1_en"
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
                value={data.text1_en}
                floatingLabel="text1_en"
              />
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
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_fa')}
                id="floatingTextarea"
                value={data.text2_fa}
                floatingLabel="text2_fa"
              />
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
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_en')}
                id="floatingTextarea"
                value={data.text4_en}
                floatingLabel="text4_en"
              />
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
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_fa')}
                id="floatingTextarea"
                value={data.text5_fa}
                floatingLabel="text5_fa"
              />
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
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text7_en')}
                id="floatingTextarea"
                value={data.text7_en}
                floatingLabel="text7_en"
              />
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
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text8_fa')}
                id="floatingTextarea"
                value={data.text8_fa}
                floatingLabel="text8_fa"
              />
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
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text10_en')}
                id="floatingTextarea"
                value={data.text10_en}
                floatingLabel="text10_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text10_fa')}
                id="floatingTextarea"
                value={data.text10_fa}
                floatingLabel="text10_fa"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section4 */}
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
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
              />
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
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_fa')}
                id="floatingTextarea"
                value={data.text2_fa}
                floatingLabel="text2_fa"
              />
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
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_en')}
                id="floatingTextarea"
                value={data.text4_en}
                floatingLabel="text4_en"
              />
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
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_fa')}
                id="floatingTextarea"
                value={data.text5_fa}
                floatingLabel="text5_fa"
              />
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
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text7_en')}
                id="floatingTextarea"
                value={data.text7_en}
                floatingLabel="text7_en"
              />
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
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text8_fa')}
                id="floatingTextarea"
                value={data.text8_fa}
                floatingLabel="text8_fa"
              />
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
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text10_en')}
                id="floatingTextarea"
                value={data.text10_en}
                floatingLabel="text10_en"
              />
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
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text11_fa')}
                id="floatingTextarea"
                value={data.text11_fa}
                floatingLabel="text11_fa"
              />
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
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image1')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image1
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image2')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image2
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image3')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image3
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image4')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image4
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image5')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image5
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image6')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image6
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image7')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image7
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image8')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image8
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image9')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image9
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image10')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image10
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image11')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image11
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image12')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image12
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section5 */}
    </div>
  )
}
const Section6 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section6 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section6</CAccordionHeader>
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
                onChange={(e) => onChangeValue(e, section, 'title2_en')}
                id="floatingTextarea"
                value={data.title2_en}
                floatingLabel="title2_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title2_fa')}
                id="floatingTextarea"
                value={data.title2_fa}
                floatingLabel="title2_fa"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_fa')}
                id="floatingTextarea"
                value={data.text1_fa}
                floatingLabel="text1_fa"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image1')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image1
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image2')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image2
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image3')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image3
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image4')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image4
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image5')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image5
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image6')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image6
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image7')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image7
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image8')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image8
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
            <CInputGroup className="mb-1"></CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section6 */}
    </div>
  )
}
