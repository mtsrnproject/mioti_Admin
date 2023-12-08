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

export default function Screen_annotation() {
  const location = useLocation()
  const pageName = location.pathname.substring(1)

  const [pageData, setPageData] = useState(null)
  const [pageImages, setPageImages] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setPageImages(null)
    setPageData(null)
    gettingPageData()
    setLoading(true)
  }, [location])

  const gettingPageData = async () => {
    await getPageData(pageName).then((res) => {
      setPageData(res)
      setLoading(false)
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
    console.log('pageData', pageData)
  }

  const onChangeImageValue = (e, section, name) => {
    e.preventDefault()
    setPageImages({
      ...pageImages,
      [`${section}_${name}`]: e.target.files[0],
    })
  }

  return (
    <div>
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
            section="section2tab1"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section2Tab2
            pageData={pageData}
            section="section2tab2"
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
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section5 */}
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
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_fa')}
                id="floatingTextarea"
                value={data.text1_fa}
                floatingLabel="text1_fa"
              />
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
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'video1')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  video1
                </CFormLabel>
              </CFormFloating>
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
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'video1')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  video1
                </CFormLabel>
              </CFormFloating>
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
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section4 */}
    </div>
  )
}
