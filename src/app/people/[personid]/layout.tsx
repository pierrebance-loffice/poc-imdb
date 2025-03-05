import BaseLayout from '@app/ui/base-layout/base-layout'

type Props = Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>

export default function Layout(props: Props) {
  return (
    <BaseLayout enableButton={true}>
      {props.children}
      {props.modal}
    </BaseLayout>
  )
}
