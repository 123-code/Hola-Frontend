
export default function ChatBubble({message, isUser}){
    const styles = {
        container: {
          maxWidth: '60%',
          padding: 10, 
          borderRadius: 10,
          marginBottom: 10
        },
        text: {
          fontSize: 16
        },
        user: {
          backgroundColor: '#58D68D',
          alignSelf: 'flex-end' 
        },
        assistant: {
          backgroundColor: '#E5E7EB',
          alignSelf: 'flex-start'
        }
      }
      return(
        <>
        <div style={{...styles.container, ...(isUser ? styles.user : styles.assistant)}}>
      <p style={styles.text}>{message}</p>
    </div>

        </>
      )

}
