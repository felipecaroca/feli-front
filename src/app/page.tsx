'use client'

import { ErrorMessageComponent } from '@/components'
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '@/components/ui/select'
import { useHomePage } from '@/hooks'
import { createListCollection, VStack, Button, Box } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'

const dummie = createListCollection({
  items: [
    { label: 'organization1', value: 'Organización 1' },
    { label: 'organization2', value: 'Organización 2' },
  ],
})

export default function Home() {
  const { control, handleSubmit, onSubmit } = useHomePage()

  return (
    <VStack h="100vh" justifyContent="center" alignItems="center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="organization"
          {...{ control }}
          render={({
            field: { value, onBlur, onChange },
            fieldState: { error },
          }) => (
            <Box>
              <SelectRoot
                invalid={!!error?.message}
                collection={dummie}
                size="sm"
                width="320px"
                defaultValue={[value]}
                {...{
                  onChange,
                  onBlur,
                }}
              >
                <SelectLabel>Selecciona tu organización</SelectLabel>
                <SelectTrigger>
                  <SelectValueText placeholder="Seleciona..." />
                </SelectTrigger>
                <SelectContent>
                  {dummie.items.map((movie) => (
                    <SelectItem item={movie} key={movie.value}>
                      {movie.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectRoot>
              <Box py={2}>
                <ErrorMessageComponent {...{ message: error?.message }} />
              </Box>
            </Box>
          )}
        />
        <Button {...{ w: 'full', type: 'submit' }}>Ir</Button>
      </form>
    </VStack>
  )
}
