import { Button } from "../../components/Buttons/Button";
import { Text } from "../../components/Texts/Text";

export function Dashboard() {

  return (
    // <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
    <div>

      <Button variant="primary">
        {' '}+ Abrir nova {' '}
      </Button>
    

      <Button variant="outline">
        {' '} Atualizar {' '}
      </Button>

      <Text size="textLarge">
        {' '}Text large{' '}
      </Text>


    </div>
  )
}