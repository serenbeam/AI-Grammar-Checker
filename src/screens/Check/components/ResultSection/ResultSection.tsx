import { View, Text } from 'react-native'
import React from 'react'
import { EmptyState, Loading, ResultCard, SectionHeader } from '@/components'
import { ResultSectionProps } from '../../CheckScreen.types'

export function ResultSection({
  loading,
  result
}: ResultSectionProps) {

  return (
    <View style={{marginTop: 10}}>
      <SectionHeader title='Corrected Sentence' />

      {loading ? (
        <Loading />

      ) : result ? (
        <ResultCard
          result={result}
        />
      
      ) : (
        <EmptyState
          message='No result yet'
        />
      )}
    </View>
  )
}