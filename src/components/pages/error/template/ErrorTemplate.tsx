import { css } from '~/styled-system/css'

type Props = {
  title: React.ReactNode
  message: React.ReactNode
  navigation?: React.ReactNode
  pageTitle: string
}

export const ErrorTemplate = (props: Props) => {
  return (
    <>
      <div className={rootContainer}>
        <main className={mainContainer}>
          <div className={box}>
            <p className={title}>{props.title}</p>
            <p className={message}>{props.message}</p>
            {props.navigation}
          </div>
        </main>
      </div>
    </>
  )
}
const rootContainer = css({
  position: 'relative',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
})

const mainContainer = css({
  flex: 1,
  height: '100%',
})

const box = css({
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  paddingBottom: 90,
  textAlign: 'center',
})

const message = css({
  marginBottom: 24,
  color: 'themePrimary',
  fontSize: 18,
})

const title = css({
  marginBottom: 26,
  fontSize: 30,
  color: 'themePrimary',
  lineHeight: '120%',
})
